(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],f=0,b=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="./";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"367f":function(t,e,n){"use strict";n("8074")},3722:function(t,e,n){"use strict";n("ce1d")},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="4678"},"4eb3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("router-view")],1)},o=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("bc3a"),c=n.n(i),l=n("2f62"),u=n("31bd"),f=n("1fca"),b=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"charts"},[n("h1",[t._v("Reps Voting Analysis - General")]),n("section",{staticClass:"tiles"},[n("Tile",{attrs:{amount:this.votingData.nominees.length,title:"Total nominees"}}),n("Tile",{attrs:{amount:this.votingData.totalVoters,title:"Total voters"}}),n("Tile",{attrs:{amount:this.votingData.totalEligible,title:"Total Eligible"}}),n("Tile",{attrs:{amount:this.votersRatioInPercent,title:"% voted"}})],1)])},p=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile"},[n("p",{staticClass:"number"},[t._v(t._s(this.amount))]),n("p",[t._v(t._s(this.title))])])},v=[],g=(n("c5f6"),{name:"RepsTile",props:{amount:[Number,String],title:String},components:{}}),h=g,m=(n("3722"),n("2877")),y=Object(m["a"])(h,j,v,!1,null,"314c359d",null),O=y.exports;function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P,D,w={name:"General",props:{},components:{Tile:O},computed:C({},Object(l["d"])(["votingData"]),{votersRatioInPercent:function(){var t=100*this.votingData.totalVotersRatio;return t.toFixed(2)}})},k=w,V=(n("367f"),Object(m["a"])(k,d,p,!1,null,"2ee75b04",null)),E=V.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"charts"},[n("h1",[t._v("Reps Voting Analysis - Candidates")]),n("CandidateVoteChart",{attrs:{title:"Votes/Views per Candidate",voting:t.votingData}}),n("CandidatePossibleVotesChart",{attrs:{title:"Ratio Possible Votes per Candidate",subtitle:"(1.0 if all voters voted max points for a candidate)",voting:t.votingData}})],1)},S=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidates-chart"},[n("h2",[t._v(t._s(t.title))]),n("h3",[t._v(t._s(t.subtitle))]),n("CustomBarChart",{attrs:{"chart-data":t.datacollection}})],1)},R=[],z=(n("7f7f"),{name:"CustomBarChart",extends:f["a"],mixins:[f["c"].reactiveProp],props:{chartData:Object},mounted:function(){this.renderChart(this.chartData,{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}})}}),N=z,A=Object(m["a"])(N,P,D,!1,null,null,null),I=A.exports,G={name:"CandidateVoteChart",props:{title:String,subtitle:String,voting:Object},computed:{datacollection:function(){return{labels:this.voting.nominees.map((function(t){return t.name})),datasets:[{label:"Votes",backgroundColor:"#f87979",data:this.voting.nominees.map((function(t){return t.votes}))},{label:"YT Video Views",backgroundColor:"#0099CC",data:this.voting.nominees.map((function(t){return t.videoViews}))}]}}},components:{CustomBarChart:I}},$=G,L=Object(m["a"])($,T,R,!1,null,null,null),U=L.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidates-chart"},[n("h2",[t._v(t._s(t.title))]),n("h3",[t._v(t._s(t.subtitle))]),n("CustomBarChart",{attrs:{"chart-data":t.datacollection}})],1)},K=[],H={name:"CandidatePossibleVotesChart",props:{title:String,subtitle:String,voting:Object},computed:{datacollection:function(){return{labels:this.voting.nominees.map((function(t){return t.name})),datasets:[{label:"Ratio from all possible votes",backgroundColor:"#0099CC",data:this.voting.nominees.map((function(t){return t.ratioOfTotalPossibleVotes}))}]}}},components:{CustomBarChart:I}},M=H,F=Object(m["a"])(M,B,K,!1,null,null,null),q=F.exports;function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z={name:"Candidates",props:{},components:{CandidateVoteChart:U,CandidatePossibleVotesChart:q},computed:Y({},Object(l["d"])(["votingData"]))},Q=Z,W=Object(m["a"])(Q,x,S,!1,null,null,null),X=W.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"charts"},[n("h1",[t._v("Reps Voting Analysis - Voters")]),t.votingData.joinedInfo?n("VotersChart",{attrs:{voting:t.votingData}}):t._e(),t.votingData.joinedInfo?t._e():n("p",[t._v("No data available.")])],1)},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"votesPerDay-chart"},[n("p",[t._v("Split up by when Reps have joined the program (in months)")]),n("CustomBarChart",{attrs:{"chart-data":t.datacollection}})],1)},rt=[],at={name:"VotersChart",props:{voting:Object},computed:{datacollection:function(){var t=this;return{labels:Object.keys(this.voting.joinedInfo),datasets:[{label:"voted",backgroundColor:"#f87979",data:Object.keys(this.voting.joinedInfo).map((function(e){return t.voting.joinedInfo[e].voted}))},{label:"total",backgroundColor:"#0099CC",data:Object.keys(this.voting.joinedInfo).map((function(e){return t.voting.joinedInfo[e].total}))}]}}},components:{CustomBarChart:I}},ot=at,st=Object(m["a"])(ot,nt,rt,!1,null,null,null),it=st.exports;function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ut={name:"Voters",props:{},components:{VotersChart:it},computed:lt({},Object(l["d"])(["votingData"]))},ft=ut,bt=Object(m["a"])(ft,tt,et,!1,null,null,null),dt=bt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"votersPerCountry-chart"},[n("h1",[t._v("Reps Voting Analysis - Voters per Country")]),t.votingData.countryInfo?n("table",[t._m(0),n("tbody",t._l(this.countryData,(function(e){return n("tr",{key:e.key},[n("td",[t._v(t._s(e.key))]),n("td",[t._v(t._s(e.percentage)+" %")]),n("td",[t._v(t._s(e.voted))]),n("td",[t._v(t._s(e.total))])])})),0)]):t._e(),t.votingData.countryInfo?t._e():n("p",[t._v("No data available.")])])},jt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("Country")]),n("th",[t._v("Ratio")]),n("th",[t._v("Reps who voted")]),n("th",[t._v("Total Reps")])])}];n("55dd");function vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?vt(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ht={name:"VotersPerCountry",props:{},computed:gt({},Object(l["d"])(["votingData"]),{countryData:function(){var t=this;if(!this.votingData)return[];var e=Object.keys(this.votingData.countryInfo).map((function(e){var n=t.votingData.countryInfo[e],r=100*n.ratio,a=r.toFixed(2);return{key:e,voted:n.voted,total:n.total,ratio:n.ratio,percentage:a}})),n=e.sort((function(t,e){return mt(t,e)}));return n}})};function mt(t,e){return t.ratio>e.ratio?-1:e.ratio>t.ratio?1:0}var yt=ht,Ot=(n("fc4e"),Object(m["a"])(yt,pt,jt,!1,null,"52fdde36",null)),_t=Ot.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"charts"},[n("h1",[t._v("Reps Voting Analysis - Votes per Day")]),t.votingData.votedPerDate?n("VotesPerDayChart",{attrs:{voting:t.votingData}}):t._e(),t.votingData.votedPerDate?t._e():n("p",[t._v("No data available.")])],1)},Pt=[],Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"votesPerDay-chart"},[n("CustomBarChart",{attrs:{"chart-data":t.datacollection}})],1)},wt=[],kt=(n("8615"),{name:"CandidateVoteChart",props:{voting:Object},computed:{datacollection:function(){return{labels:Object.keys(this.voting.votedPerDate),datasets:[{label:"Votes per Day",backgroundColor:"#f87979",data:Object.values(this.voting.votedPerDate)}]}}},components:{CustomBarChart:I}}),Vt=kt,Et=Object(m["a"])(Vt,Dt,wt,!1,null,null,null),xt=Et.exports;function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Rt={name:"VotesPerDay",props:{},components:{VotesPerDayChart:xt},computed:Tt({},Object(l["d"])(["votingData"]))},zt=Rt,Nt=Object(m["a"])(zt,Ct,Pt,!1,null,null,null),At=Nt.exports;r["a"].use(b["a"]);var It=new b["a"]({routes:[{path:"/:votingKey?",name:"General",component:E},{path:"/:votingKey?/candidates",name:"Candidates",component:X},{path:"/:votingKey?/voters",name:"Voters",component:dt},{path:"/:votingKey?/votersPerCountry",name:"VotersPerCountry",component:_t},{path:"/:votingKey?/votesPerDay",name:"VotesPerDay",component:At}]});n("a481");r["a"].use(l["a"]);var Gt=new l["a"].Store({state:{votingData:{nominees:[],joinedInfo:[],votedPerDate:[],totalVotersRatio:0,totalVoters:0,totalEligible:0},availableVotings:[],allVotingData:{},votingURL:"",votingKey:""},mutations:{CHANGE_VOTING_DATA:function(t,e){t.allVotingData=e,t.availableVotings=Object.keys(e)},CHANGE_SELECTED_VOTING:function(t,e){t.votingData=t.allVotingData[e],t.votingURL="/"+e,t.votingKey=e}},actions:{setVotingData:function(t,e){var n=t.commit,r=t.state;n("CHANGE_VOTING_DATA",e);var a=e&&Object.keys(e),o=e&&Object.keys(e)[a.length-1],s=r.route.params&&r.route.params.votingKey,i=s||o;n("CHANGE_SELECTED_VOTING",i)},changeVoting:function(t,e){var n=t.commit,r=t.state,a=It.history.current.path,o=r.votingKey,s=a.replace(o,e);n("CHANGE_SELECTED_VOTING",e),It.push(s)}}}),$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"full-nav"},[n("div",{staticClass:"navigation"},[n("ul",t._l(t.availableVotings,(function(e){return n("li",{key:e},[n("span",{staticClass:"bold"},[n("a",{on:{click:function(n){return t.selectVoting(e)}}},[t._v(t._s(e))])])])})),0)]),n("div",{staticClass:"navigation"},[n("ul",[n("li",[n("router-link",{attrs:{to:t.votingURL}},[t._v("General")])],1),n("li",[n("router-link",{attrs:{to:t.votingURL+"/candidates"}},[t._v("Candidates")])],1),n("li",[n("router-link",{attrs:{to:t.votingURL+"/voters"}},[t._v("Voters")])],1),n("li",[n("router-link",{attrs:{to:t.votingURL+"/votersPerCountry"}},[t._v("Voters per Country")])],1),n("li",[n("router-link",{attrs:{to:t.votingURL+"/votesPerDay"}},[t._v("Votes per Day")])],1)])])])},Lt=[];function Ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ut(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ut(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Kt={name:"Navigation",props:{},components:{},methods:{selectVoting:function(t){this.$store.dispatch("changeVoting",t)}},computed:Bt({},Object(l["d"])(["votingData","availableVotings","votingURL","route"]))},Ht=Kt,Mt=(n("930e"),Object(m["a"])(Ht,$t,Lt,!1,null,"324a312c",null)),Ft=Mt.exports;function qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Jt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?qt(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Object(u["sync"])(Gt,It);var Yt={name:"app",router:It,store:Gt,components:{VueCharts:f["b"],Navigation:Ft},computed:Jt({},Object(l["d"])(["votingData"])),mounted:function(){var t=this;c.a.get("voting_analysis.json").then((function(e){t.setVotingData(e.data)}))},methods:Jt({},Object(l["c"])(["CHANGE_VOTING_DATA"]),{},Object(l["b"])(["setVotingData"]))},Zt=Yt,Qt=(n("034f"),Object(m["a"])(Zt,a,o,!1,null,null,null)),Wt=Qt.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Wt)}}).$mount("#app")},8074:function(t,e,n){},"85ec":function(t,e,n){},"930e":function(t,e,n){"use strict";n("4eb3")},ce1d:function(t,e,n){},ecab:function(t,e,n){},fc4e:function(t,e,n){"use strict";n("ecab")}});
//# sourceMappingURL=app.1227b367.js.map