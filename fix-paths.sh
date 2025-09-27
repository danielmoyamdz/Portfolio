#!/usr/bin/env sh

# Script to fix paths for GitHub Pages deployment
echo "Fixing paths for GitHub Pages..."

# Navigate to out directory
cd out

# Create a backup
cp index.html index.html.backup

# Fix the HTML file to remove /Portfolio/ prefix from Next.js assets
sed -i '' 's|/Portfolio/_next/|/_next/|g' index.html
sed -i '' 's|/Portfolio/favicon/|/favicon/|g' index.html
sed -i '' 's|/Portfolio/images/|/images/|g' index.html
sed -i '' 's|/Portfolio/certs/|/certs/|g' index.html
sed -i '' 's|/Portfolio/cv/|/cv/|g' index.html
sed -i '' 's|/Portfolio/tech/|/tech/|g' index.html

# Move Next.js assets to root level
if [ -d "_next" ]; then
    echo "Moving _next directory to root..."
    mv _next _next_backup
fi

# Move other assets to root level
if [ -d "Portfolio" ]; then
    echo "Moving Portfolio assets to root..."
    # Move favicon
    if [ -f "Portfolio/favicon.ico" ]; then
        cp Portfolio/favicon.ico favicon.ico
    fi
    # Move images
    if [ -d "Portfolio/images" ]; then
        cp -r Portfolio/images/* images/ 2>/dev/null || true
    fi
fi

echo "Path fixing completed!"
cd -
