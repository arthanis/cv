#!/usr/bin/env sh

# abort on errors
# set -e

# new orphan branch
# git checkout --orphan gh-pages

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:arthanis/cv.git master:gh-pages

# new work tree
# git --work-tree dist add --all

# commit
# git --work-tree dist commit -m 'Deploy'

# push
# git push origin HEAD:gh-pages --force

# checkout master
# git checkout -f master

# remove local gh-pages branch
# git branch -D gh-pages

# cd -
