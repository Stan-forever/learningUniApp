"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_segmented_control2 + _easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_segmented_control + _easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "cuteAnimal",
  setup(__props) {
    const listData = common_vendor.ref([]);
    const getData = async () => {
      try {
        const res = await common_vendor.index.request({
          url: "https://tea.qingnian8.com/tools/petShow",
          data: {
            size: 5
          },
          header: {
            "access-key": "abc123456"
          }
        });
        listData.value = [...listData.value, ...res.data.data];
      } catch (e) {
        console.log("err", e);
      }
    };
    const handlePreview = (current) => {
      let urls = listData.value.map((item) => item.url);
      common_vendor.index.previewImage({
        urls,
        current
      });
    };
    const handleRefresh = () => {
      common_vendor.index.startPullDownRefresh();
    };
    const handleTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 100
      });
    };
    const onClickItem = (val) => {
      console.log("val", val);
    };
    common_vendor.onPullDownRefresh(() => {
      listData.value = [];
      getData();
    });
    common_vendor.onReachBottom(() => {
      getData();
    });
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickItem),
        b: common_vendor.p({
          current: 1,
          values: [11, 22, 33],
          styleType: "button",
          activeColor: "#4cd964"
        }),
        c: common_vendor.f(listData.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => handlePreview(index), item._id),
            c: common_vendor.t(item.content),
            d: item._id
          };
        }),
        d: common_vendor.p({
          type: "refreshempty",
          size: "30"
        }),
        e: common_vendor.o(handleRefresh),
        f: common_vendor.p({
          type: "arrow-up",
          size: "30"
        }),
        g: common_vendor.o(handleTop),
        h: common_vendor.p({
          status: "loading"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-446eb6a2"], ["__file", "D:/bywin/JimSenVue/uniappBasicTemplate/pages/cuteAnimal/cuteAnimal.vue"]]);
wx.createPage(MiniProgramPage);
