#!/bin/bash

# Change to the dist directory
cd dist

# Find the _commonjsHelpers file
old_filename=$(find . -type f -name '_commonjsHelpers.*.js')

if [ -z "$old_filename" ]; then
  echo "_commonjsHelpers file not found"
  exit 1
fi

# Remove the underscore prefix
new_filename=$(echo $old_filename | sed 's/_//')

# Rename the file
mv $old_filename $new_filename

# Update the import references in other generated JavaScript files
for file in $(find . -type f -name '*.js'); do
  sed -i '' "s/${old_filename//\//\\/}/${new_filename//\//\\/}/g" $file
done

echo "Updated _commonjsHelpers file and import references"
