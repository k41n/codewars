#!/bin/sh

echo "Author;Worst case (ns); Best case(ns)"
node --experimental-default-type=module --max-old-space-size=8192 benchmark.js
ruby benchmark.rb
