var tabs = require("sdk/tabs");
var self = require("sdk/self");

var menuitem = require("menuitems").Menuitem({
  id: "clickme",
  menuid: "menu_ToolsPopup",
  label: "Connect to CLJS REPL",
  onCommand: function() {
    tabs.activeTab.attach({
      contentScriptFile: self.data.url("repl-connect.js")
    });
  },
  insertbefore: "menu_pageInfo"
});

//
//var widgets = require("sdk/widget");
//var tabs = require("sdk/tabs");
//var self = require("sdk/self");
//
//var widget = widgets.Widget({
//  id: "mozilla-link",
//  label: "Mozilla website",
//  contentURL: "http://www.mozilla.org/favicon.ico",
//  }
//});
