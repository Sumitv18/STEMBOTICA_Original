#!/bin/bash

# Backend Environment Variables Setup Script
# Generated from Vly for Git Sync
# Run this script to set up your Convex backend environment variables

echo 'Setting up Convex backend environment variables...'

# Check if Convex CLI is installed
if ! command -v npx &> /dev/null; then
    echo 'Error: npx is not installed. Please install Node.js and npm first.'
    exit 1
fi

echo "Setting JWKS..."
npx convex env set "JWKS" -- "{\"keys\":[{\"use\":\"sig\",\"kty\":\"RSA\",\"n\":\"3iXHX2Z9vYHh0tHjLlMn6z21TwQYY3A9qNrRpC9DBSKidkP21pwMfKjH-afum7aurJ7zi8-VZedhw7cHd-VLYLp3XNpOxuIThFYHOS3eIYgDomc23MuLdFFBtxPEVqg-nbzlfM99dmQfbHCAem0EBWdUGqZ6HSSkOBI75hjqPmWzYfx0xKg0R1rkvPhKLcpQOl1ygJaMTwf6zunD1DaaSkC3YzDGSjBIsiCBL0rjU6Nu6zrBS-DaLZX9xM4JlFjDeHt46PO0OZanlbaiBGvb36K84C2J9jdFrHEoNNDDi2seZPH6yAy5midhXAJnj8Ce5gqtoIlFXUCVHeu4HoueVQ\",\"e\":\"AQAB\"}]}"

echo "Setting JWT_PRIVATE_KEY..."
npx convex env set "JWT_PRIVATE_KEY" -- "-----BEGIN PRIVATE KEY----- MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDeJcdfZn29geHS 0eMuUyfrPbVPBBhjcD2o2tGkL0MFIqJ2Q/bWnAx8qMf5p+6btq6snvOLz5Vl52HD twd35Utgundc2k7G4hOEVgc5Ld4hiAOiZzbcy4t0UUG3E8RWqD6dvOV8z312ZB9s cIB6bQQFZ1QapnodJKQ4EjvmGOo+ZbNh/HTEqDRHWuS8+EotylA6XXKAloxPB/rO 6cPUNppKQLdjMMZKMEiyIIEvSuNTo27rOsFL4Notlf3EzgmUWMN4e3jo87Q5lqeV tqIEa9vforzgLYn2N0WscSg00MOLax5k8frIDLmaJ2FcAmePwJ7mCq2giUVdQJUd 67gei55VAgMBAAECggEAA88ihsp/W/VC7cY/Dr+KxvAZMIhpsaTOTduorhfIXqls HzqFnELzPNz5BtkgEIf2oUudcfeGgIeR59T22hGys+8mlk9A/AyK2KFQAOU+MpV+ OHXsHSeZVc6B4bWDT5gVcMd5KOV26YWIe2fHcDH32G7f5JAXtnG3JiX75HNnatfz 6CYQppv7eouncIMKdBlg/ZJXBPIyzz6se9CerWJ1dTQVT6CHfxcw1L3g5GkZxiK7 w7SJ0XPPqRseEUPyt9c3KRuNOd1/KmxLkZQgbQgsB5tbsO0teJ2eJLHT5Yd1yos0 xUo+74rxng4nEA2DcjFkHVMTVoO13ViFQx4L3IrZoQKBgQDzbjhdNomWm+6HXK1I MpfpET0jbuyb90OE4QlV0Ru73VAHH4npJQZ9m9UwQchHkGAIFObYUSFA/m8AkwVy GNKhz124JotKw9mDlxhpgVRh10+6+CQxNSuNXwwFvxljB8V6m0l6k6q20TxzwUaz wt8L3c+LwgyHwHL3BED3GMKT4QKBgQDpnjrwnfqaIdqDfw049xPbLvlVNi1wq0Na 4Scb8Ws1Ed1DuPPkWc0mZZSya8ZW6SKBj88XoBuqD5grox1lso4MLEkhp2syEFDg XTph7+euBfUyQDp2eSbiUZ25ampclWqt+6iQMwsfUW1vhcHpD37OYlfMl1fOZo3O empYjVcY9QKBgQDud9YdclS8xsqXrjFOXcm1Fx8me/6sF0D8hhtIB0487mP8ZmgK jivalvL0kCyr9oIsyJUP6gJCkj2ZeW1HRYvp2aN8x72Co3OM1lKi4IASTQOdLIL/ 9Y9RsX+sjXVILw/EuST1QH1nFHg9CWTCqq8oB8XOqmzt+5hj5bXimk3a4QKBgClQ iE/hQF5duk0i/O2kFGjgx8tgB20zfHfn9YilizYZcK33WXp6vyMZN9DN6oeYNzf+ fLtK31mV5G1jLWG80A4rDsva1cRGymbDVf3X9Xr7Jr+6SByHlG7VzDTsMt8otXML XGYUANWLCvV8DCzxRpWtIqXV5ftke5OWZpQ+era5AoGAaGT8UmXji8MQg35bNvPv 3ALXrhrc8OX1FL9fACZpmwhnKjC2H0g+OqmTL0p1wcPJWTKI055+h7xbEGBytVYx 7tZbnAzFDs4IUyVaDoJC+L3+tihi50j5w1lBkF6ky1wDUMhwaY1ORxK/1UomP79n zZpwsFUSUOU51601jNAIBFA"

echo "Setting NEW_VAR_5..."
npx convex env set "NEW_VAR_5" -- "VITE_CONVEX_URL"

echo "Setting RESEND_API_KEY..."
npx convex env set "RESEND_API_KEY" -- "re_G5XHFogH_3Mdoqt6iXHnF9VVW6tDcxGqt"

echo "Setting SITE_URL..."
npx convex env set "SITE_URL" -- "http://localhost:5173"

echo "Setting VLY_APP_NAME..."
npx convex env set "VLY_APP_NAME" -- "STEMBotica"

echo "✅ All backend environment variables have been set!"
echo "You can now run: pnpm dev:backend"
