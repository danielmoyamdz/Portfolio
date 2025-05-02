#!/bin/bash

# Create tech directory if it doesn't exist
mkdir -p public/tech

# Array of technology icons to download
declare -a icons=(
  "php"
  "drupal"
  "java"
  "spring"
  "python"
  "react"
  "nodedotjs"
  "nextdotjs"
  "mysql"
  "postgresql"
  "mongodb"
  "docker"
)

# Download each icon
for icon in "${icons[@]}"
do
  # Download from Simple Icons with explicit format
  curl -L -o "public/tech/${icon}.svg" "https://simpleicons.org/icons/${icon}.svg"
  
  # Replace black fill with primary color and ensure SVG has proper viewBox
  sed -i '' '
    s/fill="#[^"]*"/fill="#3B82F6"/g
    s/<svg/<svg width="100%" height="100%"/g
  ' "public/tech/${icon}.svg"
done

echo "All icons have been downloaded and formatted!" 