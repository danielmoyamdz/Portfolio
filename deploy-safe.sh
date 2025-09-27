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

# Add remote if it doesn't exist
if ! git remote get-url origin > /dev/null 2>&1; then
    git remote add origin https://github.com/danielmoyamdz/Portfolio.git
fi

# Fetch the existing gh-pages branch
echo "Fetching existing gh-pages branch..."
git fetch origin gh-pages

# Checkout the gh-pages branch or create it
if git show-ref --verify --quiet refs/remotes/origin/gh-pages; then
    echo "Checking out existing gh-pages branch..."
    # Remove all files first to avoid conflicts
    rm -rf * .[^.]* 2>/dev/null || true
    git checkout -b gh-pages origin/gh-pages
else
    echo "Creating new gh-pages branch..."
    git checkout -b gh-pages
fi

# Add all files
git add -A

# Commit changes
git commit -m "deploy: $(date)"

# Push to gh-pages branch (without force)
echo "Pushing to GitHub Pages..."
git push origin gh-pages

echo "Deployment completed!"
cd -
