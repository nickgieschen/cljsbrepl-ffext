(ns clbrowserrepl.core
   (:require [clojure.browser.repl :as repl]))

(defn ^:export do-connect []
  (repl/connect "http://localhost:9000/repl")
)

(do-connect)