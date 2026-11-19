output "simopzz_com_name_servers" {
  description = "Set these as the nameservers for simopzz.com at Porkbun."
  value       = cloudflare_zone.com.name_servers
}

output "simopzz_dev_name_servers" {
  description = "Set these as the nameservers for simopzz.dev at Porkbun."
  value       = cloudflare_zone.dev.name_servers
}

output "zone_status" {
  description = "pending until Cloudflare sees its nameservers, then active."
  value = {
    "simopzz.com" = cloudflare_zone.com.status
    "simopzz.dev" = cloudflare_zone.dev.status
  }
}
