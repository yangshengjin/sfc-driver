webpackJsonp([13,17],{547:function(t,e,n){n(663);var i=n(6)(n(621),n(688),null,null);t.exports=i.exports},621:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(190),o=n.n(i),s=n(128),a=n(201),r=n.n(a),c=null;e.default={components:{XHeader:r.a},data:function(){return{}},computed:o()({},n.i(s.a)({StationChk:"QueryStationChk"})),methods:o()({},n.i(s.b)(["GetQrCodeChk","GetTicketChk","QueryStationChk"])),mounted:function(){var t=this,e=this,n=function(t,n){switch(t){case plus.barcode.QR:"QR: ";break;case plus.barcode.EAN13:"EAN13: ";break;case plus.barcode.EAN8:"EAN8: "}if(""==n)alert("验票码无效");else try{var i=e.StationChk.shiftId,o=e.StationChk.stationId,s={shiftId:i,stationId:o,ticketInfos:[{qrCode:n}]};e.GetTicketChk(s).then(function(t){alert(t.status.desc),c.start()})}catch(t){alert(n),c.start()}},i=function(){c=new plus.barcode.Barcode("bcid"),c.onmarked=n,c.start()};document.getElementById("scan").removeAttribute("disabled"),setTimeout(function(){t.$store.commit("isLoading",{isLoading:!1}),i()},500)},created:function(){this.$store.commit("isLoading",{isLoading:!0})},destroyed:function(){c.close()}}},643:function(t,e,n){e=t.exports=n(536)(),e.push([t.i,"\n#bcid {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 0;\n  top: 0px;\n  left: 0;\n}\n","",{version:3,sources:["/./src/views/home/qrcode.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,SAAS;EACT,QAAQ;CACT",file:"qrcode.vue",sourcesContent:["\n#bcid {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 0;\n  top: 0px;\n  left: 0;\n}\n"],sourceRoot:"webpack://"}])},663:function(t,e,n){var i=n(643);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(537)("209a8b9d",i,!0)},688:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-wrap"},[n("input",{attrs:{type:"hidden",id:"scan"}}),t._v(" "),n("div",{attrs:{id:"bcid"}})])])}]}}});
//# sourceMappingURL=13.0681916793c00b5940a6.js.map