(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{z2ja:function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("p0pE"));t("miYZ");var s=r(t("tsqr")),d=r(t("d6i3")),u=t("dCQc"),c={namespace:"adminUser",state:{data:{data:[],total:0},searchData:{}},effects:{get:d.default.mark(function e(a,t){var r,n,s,c;return d.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,n(u.AdminUser,r);case 4:return c=e.sent,e.next=7,s({type:"setState",payload:{data:c}});case 7:case"end":return e.stop()}},e)}),update:d.default.mark(function e(a,t){var r,n,c;return d.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.id,c=t.call,e.next=4,c(u.updateUser,r,n);case 4:s.default.success("\u66f4\u4fee\u6539\u6210\u529f");case 5:case"end":return e.stop()}},e)})},reducers:{setState(e,a){var t=a.payload;return(0,n.default)({},e,t)}}};a.default=c}}]);