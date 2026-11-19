variable "account_id" {
  description = "Cloudflare account ID (dashboard: Account home, the three-dot menu next to the account name, Copy account ID)."
  type        = string
}

variable "netlify_bridge" {
  description = <<-EOT
    Keep simopzz.com pointing at the old Netlify site while the zone moves to Cloudflare.
    Set to false only at cutover, immediately before the first `wrangler deploy`:
    the Worker's custom domain cannot be attached while this record exists.
  EOT
  type        = bool
  default     = true
}
