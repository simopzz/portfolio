# One dynamic-redirect ruleset per zone (Cloudflare allows one per phase).

resource "cloudflare_ruleset" "com_redirects" {
  zone_id = cloudflare_zone.com.id
  name    = "Canonical host"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules = [{
    ref         = "www_to_apex"
    description = "www.simopzz.com to simopzz.com"
    expression  = "(http.host eq \"www.simopzz.com\")"
    action      = "redirect"
    action_parameters = {
      from_value = {
        status_code           = 301
        preserve_query_string = true
        target_url = {
          expression = "concat(\"https://simopzz.com\", http.request.uri.path)"
        }
      }
    }
  }]
}

resource "cloudflare_ruleset" "dev_redirects" {
  zone_id = cloudflare_zone.dev.id
  name    = "Move to simopzz.com"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules = [{
    ref         = "dev_to_com"
    description = "Every simopzz.dev URL to the same path on simopzz.com"
    expression  = "true"
    action      = "redirect"
    action_parameters = {
      from_value = {
        status_code           = 301
        preserve_query_string = true
        target_url = {
          expression = "concat(\"https://simopzz.com\", http.request.uri.path)"
        }
      }
    }
  }]
}
