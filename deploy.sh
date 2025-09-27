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

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

echo "Initializing git repository..."
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
echo "Pushing to GitHub Pages..."
git branch -M gh-pages
git push -f git@github.com:danielmoyamdz/Portfolio.git gh-pages

echo "Deployment completed!"
cd - 