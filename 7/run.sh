#!/bin/sh

echo "Author;Worst case (ms); Best case(ms); Even worse case"
node --experimental-default-type=module --max-old-space-size=8192 benchmark.js
# ruby benchmark.rb
