webpackJsonp([1],{"0IpB":function(t,n,i){"use strict";function e(t){i("VKlF")}function s(t){i("zodi")}Object.defineProperty(n,"__esModule",{value:!0});var r=i("4YfN"),a=i.n(r),o=i("Sgn/"),l=i("0aAL"),d=i("qwAB"),A=i("y/jF"),c=i("3Q4o"),u={created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},props:{data:{type:Array,default:function(){return[]}}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:null}},methods:{selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var n=Object(c.b)(t.target,"index"),i=t.touches[0];this.touch.y1=i.pageY,this.touch.anchorIndex=n,this._scrollTo(n)},onShortcutTouchMove:function(t){var n=t.touches[0];this.touch.y2=n.pageY;var i=(this.touch.y2-this.touch.y1)/18|0,e=parseInt(this.touch.anchorIndex)+i;this._scrollTo(e)},refresh:function(){this.$refs.listview.refresh()},scroll:function(t){this.scrollY=t.y},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,n=0;this.listHeight.push(n);for(var i=0;i<t.length;i++){n+=t[i].clientHeight,this.listHeight.push(n)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var n=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var i=0;i<n.length-1;i++){var e=n[i],s=n[i+1];if(-t>=e&&-t<s)return this.currentIndex=i,void(this.diff=s+t)}this.currentIndex=n.length-2},diff:function(t){var n=t>0&&t<30?t-30:0;this.fixedTop!==n&&(this.fixedTop=n,this.$refs.fixed.style.transform="translate3d(0, "+n+"px, 0)")}},components:{Scroll:d.a,Loading:A.a}},h=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[i("ul",t._l(t.data,function(n,e){return i("li",{key:e,ref:"listGroup",refInFor:!0,staticClass:"list-group"},[i("h2",{staticClass:"list-group-title"},[t._v(t._s(n.title))]),t._v(" "),i("ul",t._l(n.items,function(n,e){return i("li",{key:e,staticClass:"list-group-item",on:{click:function(i){return t.selectItem(n)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(n.name))])])}),0)])}),0),t._v(" "),i("div",{staticClass:"list-shortcut",on:{touchstart:function(n){return n.stopPropagation(),n.preventDefault(),t.onShortcutTouchStart(n)},touchmove:function(n){return n.stopPropagation(),n.preventDefault(),t.onShortcutTouchMove(n)},touchend:function(t){t.stopPropagation()}}},[i("ul",t._l(t.shortcutList,function(n,e){return i("li",{key:e,staticClass:"item",class:{current:t.currentIndex===e},attrs:{"data-index":e}},[t._v("\n        "+t._s(n)+"\n      ")])}),0)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[i("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[i("loading")],1)])},p=[],g={render:h,staticRenderFns:p},f=g,v=i("C7Lr"),C=e,b=v(u,f,!1,C,"data-v-29bedb4d",null),B=b.exports,m=i("T452"),x=i("2bvH"),E=i("F4+m"),w={mixins:[E.b],data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:a()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.singer.style.bottom=n,this.$refs.list.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;Object(o.b)().then(function(n){n.code===m.a&&(t.singers=t._normalizeSinger(n.data.list))})},_normalizeSinger:function(t){var n={hot:{title:"热门",items:[]}};t.forEach(function(t,i){i<10&&n.hot.items.push(new l.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var e=t.Findex;n[e]||(n[e]={title:e,items:[]}),n[e].items.push(new l.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var i=[],e=[];for(var s in n){var r=n[s];r.title.match(/[a-zA-Z]/)?e.push(r):"热门"===r.title&&i.push(r)}return e.sort(function(t,n){return t.title.charCodeAt(0)-n.title.charCodeAt(0)}),i.concat(e)}},Object(x.d)({setSinger:"SET_SINGER"})),components:{ListView:B}},_=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"singer",staticClass:"singer"},[i("ListView",{ref:"list",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),i("router-view")],1)},y=[],k={render:_,staticRenderFns:y},Y=k,S=i("C7Lr"),T=s,I=S(w,Y,!1,T,"data-v-79206840",null);n.default=I.exports},"Sgn/":function(t,n,i){"use strict";function e(){var t=a()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:619563301});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function s(t){var n=a()({},l.b,{hostUin:0,needNewCode:0,order:"listen",platform:"h5page",begin:0,num:100,songstatus:1,singermid:t,g_tk:619563301});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,l.c)}n.b=e,n.a=s;var r=i("aA9S"),a=i.n(r),o=i("Gak4"),l=i("T452")},VKlF:function(t,n,i){var e=i("ln7e");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("FIqI")("4f96ef00",e,!0,{})},dNyf:function(t,n,i){n=t.exports=i("UTlt")(!0),n.push([t.i,"\n.singer[data-v-79206840] {\n  position: fixed;\n  top: 70px;\n  bottom: 0;\n  width: 100%;\n}","",{version:3,sources:["F:/MyWork/Final Work/my-music/src/components/singer/singer.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,UAAU;EACV,UAAU;EACV,YAAY;CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-79206840] {\n  position: fixed;\n  top: 70px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},ln7e:function(t,n,i){n=t.exports=i("UTlt")(!0),n.push([t.i,"\n.listview[data-v-29bedb4d] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-29bedb4d] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-29bedb4d] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-29bedb4d] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-29bedb4d] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-29bedb4d] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-29bedb4d] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-29bedb4d] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-29bedb4d] {\n  color: #f8f8ff;\n}\n.listview .list-fixed[data-v-29bedb4d] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-29bedb4d] {\n  position: relative;\n  top: -1px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-29bedb4d] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}","",{version:3,sources:["F:/MyWork/Final Work/my-music/src/base/listview/listview.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,6BAA6B;EAC7B,iBAAiB;CAClB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;EACpC,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,4BAA4B;EAC5B,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,6BAA6B;EAC7B,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;CACrC",file:"listview.vue",sourcesContent:["\n.listview[data-v-29bedb4d] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-29bedb4d] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-29bedb4d] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-29bedb4d] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-29bedb4d] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-29bedb4d] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-29bedb4d] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-29bedb4d] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-29bedb4d] {\n  color: #f8f8ff;\n}\n.listview .list-fixed[data-v-29bedb4d] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-29bedb4d] {\n  position: relative;\n  top: -1px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-29bedb4d] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},zodi:function(t,n,i){var e=i("dNyf");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("FIqI")("21765d72",e,!0,{})}});
//# sourceMappingURL=1.061970f3a173301e07bd.js.map