(ns clbrowserrepl.core
   (:require [clojure.browser.repl :as repl]))

(.on js/self.port "repl-port" #(repl/connect (format "http://localhost:%s/repl" %)))

