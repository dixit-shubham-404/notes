#/!/bin/bash
export USE_SSH=true
export GIT_USER=dixit-shubham-404
export CURRENT_BRANCH=master
echo $USE_SSH
echo $GIT_USER
echo $GIT_USER

sleep 5
git checkout deployment

git branch
sleep 5

yarn deploy
sleep 5

git checkout master
