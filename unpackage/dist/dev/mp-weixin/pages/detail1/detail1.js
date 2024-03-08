"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail1",
  setup(__props) {
    const handlePush = () => {
      common_vendor.index.navigateTo({
        url: "/pages/detail3/detail3"
      });
    };
    const handlePush1 = () => {
      common_vendor.index.reLaunch({
        url: "/pages/detail2/detail2"
      });
    };
    const getPageData = async () => {
      const res = await common_vendor.index.request({
        url: "https://jsonplaceholder.typicode.com/posts"
      });
      console.log("res", res);
    };
    getPageData();
    common_vendor.onLoad((e) => {
      console.log("onLoad", e);
    });
    common_vendor.onReady((e) => {
      console.log("onReady", e);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handlePush),
        b: common_vendor.o(handlePush1)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/bywin/JimSenVue/uniappBasicTemplate/pages/detail1/detail1.vue"]]);
wx.createPage(MiniProgramPage);
