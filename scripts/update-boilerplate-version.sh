#!/usr/bin/env bash

LATEST=$(
  git ls-remote -h git@bitbucket.org:technology-studio/test-boilerplate-private-typescript.git |
  pcregrep -o1 "([\w]*)\trefs\/heads\/main"
)
echo $LATEST > .boilerplate-version
echo "Updated boilerplate version to: $LATEST"