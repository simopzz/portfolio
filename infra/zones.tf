resource "cloudflare_zone" "com" {
  account = { id = var.account_id }
  name    = "simopzz.com"
  type    = "full"
}

resource "cloudflare_zone" "dev" {
  account = { id = var.account_id }
  name    = "simopzz.dev"
  type    = "full"
}

resource "cloudflare_zone_setting" "com_always_https" {
  zone_id    = cloudflare_zone.com.id
  setting_id = "always_use_https"
  value      = "on"
}

resource "cloudflare_zone_setting" "dev_always_https" {
  zone_id    = cloudflare_zone.dev.id
  setting_id = "always_use_https"
  value      = "on"
}
