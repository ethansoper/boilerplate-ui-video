#!/bin/bash

# Clean
npm run clean

# Build
npm run build

# Create Package Name
pkgName="$1"
Timestamp=$(date + "%s")
Filename="$pkgName-dev-$Timestamp"

# Create Dist
mkdir dist/

# Zip build
zip -r build/$Filename.zip ./dist

# Send Backup to S3
aws s3 sync dist/ s3://sempris-appversions/sempris-sims-ui-dev

# Send site to S3
aws s3 sync build/ s3://sempris-sims-ui-dev