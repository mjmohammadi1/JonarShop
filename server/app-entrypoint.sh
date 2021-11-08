#!/bin/sh

set -e

echo "Run Seeds"
npm run seed

echo "Run Server"
npm run start

exec "$@"