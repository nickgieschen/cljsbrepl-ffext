(defproject ctest "0.1.0-SNAPSHOT"
            :license {:name "Eclipse Public License"
                      :url "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.5.1"]]
            :plugins [[lein-cljsbuild "0.3.2"] [lein-ring "0.8.6"]]
            :cljsbuild {
                         :builds [{:source-paths ["src/client"]
                                   :compiler {:output-to "../data/repl-connect.js"}
                                   :optimizations :simple}]
                         })
