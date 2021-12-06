LATEST=$(
  git ls-remote -h git@bitbucket.org:technology-studio/test-boilerplate-private-typescript.git |
  pcregrep -o1 "([\w]*)\trefs\/heads\/main"
)
CURRENT=$(cat .boilerplate-version)
echo "Latest version: $LATEST"
echo "Current version: $CURRENT"
if [ "$LATEST" != "$CURRENT" ]; then
  echo "🚫 Boilerplate versions do not match! Check test-boilerplate-private-typescript repo for new changes."
  exit 1
fi
echo "✅ Boilerplate versions match!"
exit 0