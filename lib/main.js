var tabs = require("sdk/tabs");
var self = require("sdk/self");
var prefs = require("sdk/simple-prefs");

var menuitem = require("menuitems").Menuitem({
  id: "clickme",
  menuid: "menu_ToolsPopup",
  label: "Connect to CLJS REPL",
  onCommand: function() {
    var worker = tabs.activeTab.attach({
      contentScriptFile: self.data.url("repl-connect.js")
    });
    worker.port.emit("repl-port", prefs.prefs["port"]);
  },
  insertbefore: "menu_pageInfo"
});

