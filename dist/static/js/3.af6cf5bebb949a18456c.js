webpackJsonp([3],{"/36v":function(e,n,t){var a=t("eeia");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("FIqI")("247ae18c",a,!0,{})},"Sgn/":function(e,n,t){"use strict";function a(){var e=r()({},o.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:619563301});return Object(c.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",e,o.c)}function i(e){var n=r()({},o.b,{hostUin:0,needNewCode:0,order:"listen",platform:"h5page",begin:0,num:100,songstatus:1,singermid:e,g_tk:619563301});return Object(c.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,o.c)}n.b=a,n.a=i;var s=t("aA9S"),r=t.n(s),c=t("Gak4"),o=t("T452")},eeia:function(e,n,t){n=e.exports=t("UTlt")(!0),n.push([e.i,"\n.singer-detail[data-v-65ceefec] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #222;\n}\n.slide-enter-active[data-v-65ceefec],\n.slide-leave-active[data-v-65ceefec] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-65ceefec],\n.slide-leave-to[data-v-65ceefec] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}","",{version:3,sources:["F:/MyWork/Final Work/my-music/src/components/singer-detail/singer-detail.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,aAAa;EACb,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,iBAAiB;CAClB;AACD;;EAEE,6BAA6B;EAC7B,qBAAqB;CACtB;AACD;;EAEE,2CAA2C;UACnC,mCAAmC;CAC5C",file:"singer-detail.vue",sourcesContent:["\n.singer-detail[data-v-65ceefec] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #222;\n}\n.slide-enter-active[data-v-65ceefec],\n.slide-leave-active[data-v-65ceefec] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-65ceefec],\n.slide-leave-to[data-v-65ceefec] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},lEJ1:function(e,n,t){"use strict";function a(e){t("/36v")}Object.defineProperty(n,"__esModule",{value:!0});var i=t("4YfN"),s=t.n(i),r=t("Sgn/"),c=t("T452"),o=t("PvFA"),l=t("2bvH"),d=t("kvay"),g={data:function(){return{songs:[]}},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(l.c)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var e=this;if(!this.singer.id)return void this.$router.push("/singer");Object(r.a)(this.singer.id).then(function(n){n.code===c.a&&(e.songs=e._normalizeSongs(n.data.list))})},_normalizeSongs:function(e){var n=[];return e.forEach(function(e){var t=e.musicData;t.songid&&t.albummid&&Object(o.c)(t.songmid).then(function(e){n.push(Object(o.a)(s()({},t,{playLists:e})))})}),n}},components:{MusicList:d.a}},f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"slide"}},[t("music-list",{attrs:{songs:e.songs,title:e.title,"bg-image":e.bgImage}})],1)},u=[],A={render:f,staticRenderFns:u},v=A,m=t("C7Lr"),p=a,b=m(g,v,!1,p,"data-v-65ceefec",null);n.default=b.exports}});
//# sourceMappingURL=3.af6cf5bebb949a18456c.js.map