#!/bin/bash

# Generate the docs for the project using TypeDoc and preserve an existing
# README.md file in the docs directory.

# Path variables
DOCS_DIR="./docs"
BACKUP_DIR="./backup"

# Backup the current README.md if it exists in the docs directory
if [ -f "$DOCS_DIR/README.md" ]; then
  echo "Backing up README.md..."
  mkdir -p $BACKUP_DIR
  cp "$DOCS_DIR/README.md" "$BACKUP_DIR/README.md"
else
  echo "No README.md found to back up."
fi

# Generate the docs
echo "Running TypeDoc..."
npx typedoc

# Restore the backed-up README.md
if [ -f "$BACKUP_DIR/README.md" ]; then
  echo "Restoring the backed-up README.md..."
  cp "$BACKUP_DIR/README.md" "$DOCS_DIR/README.md"

  # Remove backup directory if the README.md was restored successfully
  if cmp -s "$DOCS_DIR/README.md" "$BACKUP_DIR/README.md"; then
      echo "README.md restored successfully. Removing backup..."
      rm -rf $BACKUP_DIR
  else
      echo "Error: Could not restore README.md. File retained in /backup."
  fi
else
  echo "No README.md backup found. Skipping restore."
fi

echo "Docs generation complete!"