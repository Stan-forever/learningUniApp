"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail2",
  setup(__props) {
    const handleShow = () => {
      common_vendor.index.showToast({
        title: "页面加载中1231111页面加载中1231111页面加载中1231111",
        icon: "none",
        duration: 3e3,
        success: (res) => {
          console.log("res", res);
        },
        complete: (complete) => {
          console.log("complete", complete);
        }
      });
      common_vendor.index.removeTabBarBadge({
        index: 2
      });
    };
    const handleHide = () => {
      common_vendor.index.hideToast({
        title: "页面已隐藏"
      });
    };
    const showModal = () => {
      common_vendor.index.showModal({
        title: "showModal",
        editable: true,
        content: "主体",
        complete: (res) => {
          console.log("res", res);
        }
      });
    };
    const itemList = ["a", "b", "c", "d"];
    const showActionSheet = () => {
      common_vendor.index.showActionSheet({
        itemList,
        title: "请选择",
        complete: (res) => {
          console.log("res", res);
          console.log("item", itemList[res.tapIndex]);
        }
      });
    };
    common_vendor.index.showNavigationBarLoading();
    setTimeout(() => {
      common_vendor.index.setNavigationBarTitle({
        title: "新标题"
      });
      common_vendor.index.hideNavigationBarLoading();
    }, 2e3);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleShow),
        b: common_vendor.o(handleHide),
        c: common_vendor.o(showModal),
        d: common_vendor.o(showActionSheet)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/bywin/JimSenVue/uniappBasicTemplate/pages/detail2/detail2.vue"]]);
wx.createPage(MiniProgramPage);
