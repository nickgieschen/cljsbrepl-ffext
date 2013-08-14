This project is just used to generate the repl-connect.js which goes into ../data

There are a couple problems:

1. With an optimized build (cljsc src/client/main.cljs '{:optimizations :advanced}' > ../data/repl-connect.js), there are runtime errors.
2. With an unoptimized build (lein cljsbuild once) there are security errors created from a <script> tag.

So, my quick-and-dirty solution is to just do an unoptimized build and comment out the line in the generate js which causes the security error.
