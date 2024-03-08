"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/detail1/detail1.js";
  "./pages/detail2/detail2.js";
  "./pages/detail3/detail3.js";
  "./pages/cuteAnimal/cuteAnimal.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.setTabBarBadge({
      index: 2,
      text: "33"
    });
    common_vendor.index.showTabBarRedDot({
      index: 1,
      text: ""
    });
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/bywin/JimSenVue/uniappBasicTemplate/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
