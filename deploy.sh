#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd out

# create .nojekyll file to prevent GitHub Pages from processing with Jekyll
touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git branch -M gh-pages
git push -f git@github.com:danielmoyamdz/Portfolio.git gh-pages

cd - 