terraform {
  required_version = ">= 1.9"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.29"
    }
  }

  # State lives in a private R2 bucket, so no machine holds the only copy.
  # Credentials come from ./tf (derived from CLOUDFLARE_API_TOKEN).
  backend "s3" {
    bucket = "simopzz-tfstate"
    key    = "infra/terraform.tfstate"
    region = "auto"
    endpoints = {
      s3 = "https://${var.account_id}.r2.cloudflarestorage.com"
    }
    use_path_style              = true
    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_s3_checksum            = true
  }
}

# Reads the API token from CLOUDFLARE_API_TOKEN.
provider "cloudflare" {}
