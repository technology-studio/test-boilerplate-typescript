![npm](https://img.shields.io/npm/v/@txo/test-boilerplate-typescript)
![codecov](https://img.shields.io/codecov/c/github/technology-studio/test-boilerplate-typescript)
# Test boilerplate typescript #

Test boilerplate typescript

# Contribution
To add new changes, base your branch from `auto-update-dependencies` and also use it as a base for your PR. When the PR is merged, we can then sync the new changes from `auto-update-dependencies` to `master`. We can do it by following oneliner:

```
git checkout auto-update-dependencies && git pull && yarn && git checkout master && git pull && git merge auto-update-dependencies --no-edit && git push
```
