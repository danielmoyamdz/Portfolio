#!/usr/bin/env sh

# Script to deploy Next.js build to repository root for GitHub Pages
echo "Deploying to repository root for GitHub Pages..."

# Build the project
echo "Building the project..."
npm run build

# Navigate to out directory
cd out

# Fix paths for GitHub Pages
echo "Fixing paths for GitHub Pages..."
sed -i '' 's|/Portfolio/_next/|/_next/|g' index.html
sed -i '' 's|/Portfolio/favicon/|/favicon/|g' index.html
sed -i '' 's|/Portfolio/images/|/images/|g' index.html
sed -i '' 's|/Portfolio/certs/|/certs/|g' index.html
sed -i '' 's|/Portfolio/cv/|/cv/|g' index.html
sed -i '' 's|/Portfolio/tech/|/tech/|g' index.html

# Go back to project root
cd ..

# Copy all files from out to root (except .git)
echo "Copying files to repository root..."
cp -r out/* . 2>/dev/null || true
cp out/.nojekyll . 2>/dev/null || true

# Remove the out directory to avoid confusion
rm -rf out

# Add all files to git
echo "Adding files to git..."
git add .

# Commit changes
git commit -m "Deploy portfolio to root for GitHub Pages"

# Push to main branch
echo "Pushing to main branch..."
git push origin main

echo "Deployment completed! Your portfolio should now be available at:"
echo "https://danielmoyamdz.github.io/Portfolio/"
