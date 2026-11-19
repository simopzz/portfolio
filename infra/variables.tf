variable "account_id" {
  description = "Cloudflare account ID (dashboard: Account home, the three-dot menu next to the account name, Copy account ID)."
  type        = string
}

variable "netlify_bridge" {
  description = <<-EOT
    Keep simopzz.com pointing at the old Netlify site while the zone moves to Cloudflare.
    Off since the cutover (2026-11-19). Turning it on is the rollback, and only works while the
    Netlify site exists; remove the Worker's custom domain first, since the two records conflict.
  EOT
  type        = bool
  default     = false
}
