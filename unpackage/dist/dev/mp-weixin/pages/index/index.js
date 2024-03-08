"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_com_header2 = common_vendor.resolveComponent("com-header");
  const _easycom_UniHeader2 = common_vendor.resolveComponent("UniHeader");
  (_easycom_com_header2 + _easycom_UniHeader2)();
}
const _easycom_com_header = () => "../../components/com-header/com-header.js";
const _easycom_UniHeader = () => "../../components/UniHeader/UniHeader.js";
if (!Math) {
  (_easycom_com_header + _easycom_UniHeader)();
}
function _sfc_render(_ctx, _cache) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/bywin/JimSenVue/uniappBasicTemplate/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
