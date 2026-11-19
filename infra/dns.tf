# Records copied from Porkbun on 2026-11-19. The apex of simopzz.com is not
# listed: the Worker's custom domain (wrangler.jsonc) creates and owns it.
# ttl = 1 means automatic.

locals {
  netlify_site = "vocal-zabaione-58bfbe.netlify.app"
}

# --- simopzz.com ---------------------------------------------------------

# Temporary: serve the old Netlify site until cutover (see var.netlify_bridge).
resource "cloudflare_dns_record" "com_apex_netlify" {
  count   = var.netlify_bridge ? 1 : 0
  zone_id = cloudflare_zone.com.id
  name    = "simopzz.com"
  type    = "CNAME"
  content = local.netlify_site
  proxied = false
  ttl     = 1
  comment = "Temporary bridge to Netlify; removed at cutover"
}

# Redirect-only hostname: proxied to an unroutable address so the redirect
# rule in redirects.tf answers before anything is fetched.
resource "cloudflare_dns_record" "com_www" {
  zone_id = cloudflare_zone.com.id
  name    = "www.simopzz.com"
  type    = "AAAA"
  content = "100::"
  proxied = true
  ttl     = 1
  comment = "Redirects to simopzz.com"
}

# dandori runs on its own server; DNS only, not proxied, as on Porkbun.
resource "cloudflare_dns_record" "dandori_a" {
  zone_id = cloudflare_zone.com.id
  name    = "dandori.simopzz.com"
  type    = "A"
  content = "188.245.37.127"
  proxied = false
  ttl     = 1
}

resource "cloudflare_dns_record" "dandori_aaaa" {
  zone_id = cloudflare_zone.com.id
  name    = "dandori.simopzz.com"
  type    = "AAAA"
  content = "2a01:4f8:1c18:9684::1"
  proxied = false
  ttl     = 1
}

# Porkbun email forwarding.
resource "cloudflare_dns_record" "com_mx" {
  for_each = { "fwd1.porkbun.com" = 10, "fwd2.porkbun.com" = 20 }

  zone_id  = cloudflare_zone.com.id
  name     = "simopzz.com"
  type     = "MX"
  content  = each.key
  priority = each.value
  ttl      = 1
}

resource "cloudflare_dns_record" "com_spf" {
  zone_id = cloudflare_zone.com.id
  name    = "simopzz.com"
  type    = "TXT"
  content = "\"v=spf1 include:_spf.porkbun.com ~all\""
  ttl     = 1
}

resource "cloudflare_dns_record" "com_dmarc" {
  zone_id = cloudflare_zone.com.id
  name    = "_dmarc.simopzz.com"
  type    = "TXT"
  content = "\"v=DMARC1; p=none;\""
  ttl     = 1
}

# --- simopzz.dev: redirect only ------------------------------------------

resource "cloudflare_dns_record" "dev" {
  for_each = toset(["simopzz.dev", "www.simopzz.dev"])

  zone_id = cloudflare_zone.dev.id
  name    = each.key
  type    = "AAAA"
  content = "100::"
  proxied = true
  ttl     = 1
  comment = "Redirects to simopzz.com"
}
