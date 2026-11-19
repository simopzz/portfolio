terraform {
  required_version = ">= 1.9"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.29"
    }
  }
}

# Reads the API token from CLOUDFLARE_API_TOKEN.
provider "cloudflare" {}
