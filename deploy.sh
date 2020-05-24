#!/usr/bin/env sh

# abort on errors
set -e

# new orphan branch
git checkout --orphan gh-pages

# build
npm run build

# new work tree
git --work-tree dist add --all

# commit
git --work-tree dist commit -m 'Deploy'

# push
git push origin HEAD:gh-pages --force

# checkout master
git checkout -f master

# remove local gh-pages branch
git branch -D gh-pages

cd ~
