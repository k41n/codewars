#!/bin/sh

echo "Author;Case1;Case2;Case3"
node --experimental-default-type=module --max-old-space-size=8192 benchmark.js
# ruby benchmark.rb
