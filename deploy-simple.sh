#!/usr/bin/env sh

# abort on errors
set -e

# build
echo "Building the project..."
npm run build

# navigate into the build output directory
cd out

# create .nojekyll file to prevent GitHub Pages from processing with Jekyll
echo "Creating .nojekyll file..."
touch .nojekyll

# Initialize git repository
echo "Initializing git repository..."
git init

# Add remote
git remote add origin https://github.com/danielmoyamdz/Portfolio.git

# Add all files
git add -A

# Commit changes
git commit -m "deploy: $(date)"

# Create and push to gh-pages branch
echo "Pushing to GitHub Pages..."
git branch -M gh-pages
git push -f origin gh-pages

echo "Deployment completed!"
cd -
