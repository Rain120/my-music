webpackJsonp([7],{YOyO:function(t,e,r){"use strict";function s(t){r("aGdH")}Object.defineProperty(e,"__esModule",{value:!0});var n=r("Dd8w"),o=r.n(n),a=r("2X+S"),c=r("vhoT"),i=r("qwAB"),h=r("XEAW"),A=r("6Xyt"),p=r("8stH"),l=r("T452"),u=r("F4+m"),C=r("NYxO"),x={mixins:[u.b,u.c],created:function(){this._getHotKey()},data:function(){return{hotKey:[],query:""}},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},methods:o()({addQuery:function(t){this.$refs.searchBox.setQuery(t)},onQueryChange:function(t){this.query=t},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.shortcutWrapper.style.bottom=e,this.$refs.shortcut.refresh(),this.$refs.searchResult.style.bottom=e,this.$refs.suggest.refresh()},showComfirm:function(){this.$refs.confirm.show()},_getHotKey:function(){var t=this;Object(p.a)().then(function(e){e.code===l.a&&(t.hotKey=e.data.hotkey.slice(0,10))})}},Object(C.b)(["clearSearchHistory"])),watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.shortcut.refresh()},20)}},components:{SearchBox:a.a,SearchList:c.a,Scroll:i.a,Confirm:h.a,Suggest:A.a}},B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-box-wrapper"},[r("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[r("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{data:t.shortcut,refreshDelay:t.refreshDelay}},[r("div",[r("div",{staticClass:"hot-key"},[r("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),r("ul",t._l(t.hotKey,function(e,s){return r("li",{key:s,staticClass:"item",on:{click:function(r){return t.addQuery(e.k)}}},[r("span",[t._v(t._s(e.k))])])}),0)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[r("h1",{staticClass:"title"},[r("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),r("span",{staticClass:"clear",on:{click:t.showComfirm}},[r("i",{staticClass:"icon-clear"})])]),t._v(" "),r("search-list",{attrs:{searches:t.searchHistory},on:{delete:t.deleteSearchHistory,select:t.addQuery}})],1)])])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[r("suggest",{ref:"suggest",attrs:{query:t.query},on:{select:t.saveSearch,listScroll:t.blurInput}})],1),t._v(" "),r("confirm",{ref:"confirm",attrs:{text:"你忍心吗o(╥﹏╥)o",confirmBtnText:"狠心删除",cancelBtnText:"让我再想想"},on:{confirm:t.clearSearchHistory}}),t._v(" "),r("router-view")],1)},f=[],y={render:B,staticRenderFns:f},d=y,m=r("VU/8"),g=s,b=m(x,d,!1,g,null,null);e.default=b.exports},aGdH:function(t,e,r){var s=r("lVYV");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("d85105cc",s,!0,{})},lVYV:function(t,e,r){e=t.exports=r("FZ+f")(!0),e.push([t.i,"\n.search .search-box-wrapper {\n  margin: 20px;\n}\n.search .shortcut-wrapper {\n  position: fixed;\n  top: 130px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title {\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: #333;\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .shortcut-wrapper .shortcut .search-history {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear {\n  position: relative;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear:before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear {\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .search-result {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}","",{version:3,sources:["/Users/v_zhongchao01/Desktop/MyWork/Notes/my-music/src/components/search/search.vue"],names:[],mappings:";AACA;EACE,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,YAAY;CACb;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,6BAA6B;CAC9B;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,aAAa;EACb,gBAAgB;EAChB,6BAA6B;CAC9B;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,UAAU;CACX",file:"search.vue",sourcesContent:["\n.search .search-box-wrapper {\n  margin: 20px;\n}\n.search .shortcut-wrapper {\n  position: fixed;\n  top: 130px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title {\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: #333;\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .shortcut-wrapper .shortcut .search-history {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear {\n  position: relative;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear:before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear {\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .search-result {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=7.21d3ee41307315a8b8d3.js.map