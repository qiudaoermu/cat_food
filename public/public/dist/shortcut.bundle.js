webpackJsonp([0],{327:function(e,t,a){"use strict";e.exports={keyboardDefault:{fullScreen:"Ctrl+E",homePage:"Up",endPage:"Down",previousPage:"left",nextPage:"right",1:"1",2:"2",3:"3"},all_shortcuts:{},add:function(e,t,a){var r={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(a)for(var n in r)void 0===a[n]&&(a[n]=r[n]);else a=r;var s=a.target;"string"==typeof a.target&&(s=document.getElementById(a.target));e=e.toLowerCase();var o=function(r){if(r=r||window.event,a.disable_in_input){var n;if(r.target?n=r.target:r.srcElement&&(n=r.srcElement),3==n.nodeType&&(n=n.parentNode),"INPUT"==n.tagName||"TEXTAREA"==n.tagName)return}var s="";r.keyCode?s=r.keyCode:r.which&&(s=r.which);var o=String.fromCharCode(s).toLowerCase();188==s&&(o=","),190==s&&(o=".");var l=e.split("+"),d=0,c={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},p={esc:27,escape:27,tab:9,space:32,return:13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,break:19,insert:45,home:36,delete:46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},i={shift:{wanted:!1,pressed:!1},ctrl:{wanted:!1,pressed:!1},alt:{wanted:!1,pressed:!1},meta:{wanted:!1,pressed:!1}};r.ctrlKey&&(i.ctrl.pressed=!0),r.shiftKey&&(i.shift.pressed=!0),r.altKey&&(i.alt.pressed=!0),r.metaKey&&(i.meta.pressed=!0);for(var f=null,u=0;f=l[u],u<l.length;u++)"ctrl"==f||"control"==f?(d++,i.ctrl.wanted=!0):"shift"==f?(d++,i.shift.wanted=!0):"alt"==f?(d++,i.alt.wanted=!0):"meta"==f?(d++,i.meta.wanted=!0):f.length>1?p[f]==s&&d++:a.keycode?a.keycode==s&&d++:o==f?d++:c[o]&&r.shiftKey&&(o=c[o])==f&&d++;if(d==l.length&&i.ctrl.pressed==i.ctrl.wanted&&i.shift.pressed==i.shift.wanted&&i.alt.pressed==i.alt.wanted&&i.meta.pressed==i.meta.wanted&&(t(r),!a.propagate))return r.cancelBubble=!0,r.returnValue=!1,r.stopPropagation&&(r.stopPropagation(),r.preventDefault()),!1};this.all_shortcuts[e]={callback:o,target:s,event:a.type},s.addEventListener?s.addEventListener(a.type,o,!1):s.attachEvent?s.attachEvent("on"+a.type,o):s["on"+a.type]=o},remove:function(e){e=e.toLowerCase();var t=this.all_shortcuts[e];if(delete this.all_shortcuts[e],t){var a=t.event,r=t.target,n=t.callback;r.detachEvent?r.detachEvent("on"+a,n):r.removeEventListener?r.removeEventListener(a,n,!1):r["on"+a]=!1}}}}});
//# sourceMappingURL=shortcut.bundle.js.map