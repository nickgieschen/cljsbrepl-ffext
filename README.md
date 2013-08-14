#cljsbrepl-ffext
This is a Firefox extension which inserts javascript into the current tab to connect to a running ClojureScript REPL. Basically, all it does is saves you from having to put the following lines in your source:

```clojure
(:require [clojure.browser.repl :as repl]))
(repl/connect "http://localhost:9000/repl")
```

## Usage
To activate it, select "Connect to CLJS Repl" in the Tools menu. You can set the port it connects to by accessing its preferences in Tools > Add-ons > Extensions > ClojureScript REPL Connector.

## Possible Problems
I couldn't get dead code elimination to work without runtime errors, so at the moment it loads the whole Google Closure library. I assume it overwrites the one which presumably already exists on the page. I expect that shouldn't normally cause problems, but it might if, for example, you're relying on a different version of Google Closure.

## Download
You can [Download the XPI here] (cljsbrepl-ffext.xpi?raw=true).

## Compiling the CLJS
Like I said, I couldn't get dead code elimination to work without runtime errors, so at the moment I'm simply lein cljsbuilding it with simple optimization. However, there is one line in the generated js which builds a script tag. This causes a security error in Firefox, so you have to delete it. Just search for "<scr".
