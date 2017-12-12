webpackJsonp([20],{510:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(){var t,e,i,r,o={}.hasOwnProperty,s=[].slice;t={LF:"\n",NULL:"\0"},i=function(){function n(t,n,e){this.command=t,this.headers=null!=n?n:{},this.body=null!=e?e:""}var e;return n.prototype.toString=function(){var e,i,r,s;e=[this.command],s=this.headers;for(i in s)o.call(s,i)&&(r=s[i],e.push(i+":"+r));return this.body&&e.push("content-length:"+n.sizeOfUTF8(this.body)),e.push(t.LF+this.body),e.join(t.LF)},n.sizeOfUTF8=function(t){return t?encodeURI(t).split(/%..|./).length-1:0},e=function(e){var i,r,o,s,u,a,c,h,f,p,d,l,b,g,v,m,y;for(s=e.search(RegExp(""+t.LF+t.LF)),u=e.substring(0,s).split(t.LF),o=u.shift(),a={},l=function(t){return t.replace(/^\s+|\s+$/g,"")},m=u.reverse(),b=0,v=m.length;b<v;b++)p=m[b],h=p.indexOf(":"),a[l(p.substring(0,h))]=l(p.substring(h+1));if(i="",d=s+2,a["content-length"])f=parseInt(a["content-length"]),i=(""+e).substring(d,d+f);else for(r=null,c=g=d,y=e.length;(d<=y?g<y:g>y)&&(r=e.charAt(c))!==t.NULL;c=d<=y?++g:--g)i+=r;return new n(o,a,i)},n.unmarshall=function(n){var i;return function(){var r,o,s,u;for(s=n.split(RegExp(""+t.NULL+t.LF+"*")),u=[],r=0,o=s.length;r<o;r++)i=s[r],(null!=i?i.length:void 0)>0&&u.push(e(i));return u}()},n.marshall=function(e,i,r){var o;return o=new n(e,i,r),o.toString()+t.NULL},n}(),e=function(){function n(t){this.ws=t,this.ws.binaryType="arraybuffer",this.counter=0,this.connected=!1,this.heartbeat={outgoing:1e4,incoming:1e4},this.maxWebSocketFrameSize=16384,this.subscriptions={}}var e;return n.prototype.debug=function(t){var n;return"undefined"!=typeof window&&null!==window&&null!=(n=window.console)?n.log(t):void 0},e=function(){return Date.now?Date.now():(new Date).valueOf},n.prototype._transmit=function(t,n,e){var r;for(r=i.marshall(t,n,e),"function"==typeof this.debug&&this.debug(">>> "+r);;){if(!(r.length>this.maxWebSocketFrameSize))return this.ws.send(r);this.ws.send(r.substring(0,this.maxWebSocketFrameSize)),r=r.substring(this.maxWebSocketFrameSize),"function"==typeof this.debug&&this.debug("remaining = "+r.length)}},n.prototype._setupHeartbeat=function(n){var i,o,s,u,a,c,h=this;if((a=n.version)===r.VERSIONS.V1_1||a===r.VERSIONS.V1_2)return c=function(){var t,e,i,r;for(i=n["heart-beat"].split(","),r=[],t=0,e=i.length;t<e;t++)u=i[t],r.push(parseInt(u));return r}(),o=c[0],i=c[1],0!==this.heartbeat.outgoing&&0!==i&&(s=Math.max(this.heartbeat.outgoing,i),"function"==typeof this.debug&&this.debug("send PING every "+s+"ms"),this.pinger=r.setInterval(s,function(){return h.ws.send(t.LF),"function"==typeof h.debug?h.debug(">>> PING"):void 0})),0!==this.heartbeat.incoming&&0!==o?(s=Math.max(this.heartbeat.incoming,o),"function"==typeof this.debug&&this.debug("check PONG every "+s+"ms"),this.ponger=r.setInterval(s,function(){var t;if((t=e()-h.serverActivity)>2*s)return"function"==typeof h.debug&&h.debug("did not receive server activity for the last "+t+"ms"),h.ws.close()})):void 0},n.prototype._parseConnect=function(){var t,n,e,i;switch(t=1<=arguments.length?s.call(arguments,0):[],i={},t.length){case 2:i=t[0],n=t[1];break;case 3:t[1]instanceof Function?(i=t[0],n=t[1],e=t[2]):(i.login=t[0],i.passcode=t[1],n=t[2]);break;case 4:i.login=t[0],i.passcode=t[1],n=t[2],e=t[3];break;default:i.login=t[0],i.passcode=t[1],n=t[2],e=t[3],i.host=t[4]}return[i,n,e]},n.prototype.connect=function(){var n,o,u,a,c=this;return n=1<=arguments.length?s.call(arguments,0):[],a=this._parseConnect.apply(this,n),u=a[0],this.connectCallback=a[1],o=a[2],"function"==typeof this.debug&&this.debug("Opening Web Socket..."),this.ws.onmessage=function(n){var r,s,u,a,h,f,p,d,l,b,g,v;if(a="undefined"!=typeof ArrayBuffer&&n.data instanceof ArrayBuffer?(r=new Uint8Array(n.data),"function"==typeof c.debug&&c.debug("--- got data length: "+r.length),function(){var t,n,e;for(e=[],t=0,n=r.length;t<n;t++)s=r[t],e.push(String.fromCharCode(s));return e}().join("")):n.data,c.serverActivity=e(),a===t.LF)return void("function"==typeof c.debug&&c.debug("<<< PONG"));for("function"==typeof c.debug&&c.debug("<<< "+a),g=i.unmarshall(a),v=[],l=0,b=g.length;l<b;l++)switch(h=g[l],h.command){case"CONNECTED":"function"==typeof c.debug&&c.debug("connected to server "+h.headers.server),c.connected=!0,c._setupHeartbeat(h.headers),v.push("function"==typeof c.connectCallback?c.connectCallback(h):void 0);break;case"MESSAGE":d=h.headers.subscription,p=c.subscriptions[d]||c.onreceive,p?(u=c,f=h.headers["message-id"],h.ack=function(t){return null==t&&(t={}),u.ack(f,d,t)},h.nack=function(t){return null==t&&(t={}),u.nack(f,d,t)},v.push(p(h))):v.push("function"==typeof c.debug?c.debug("Unhandled received MESSAGE: "+h):void 0);break;case"RECEIPT":v.push("function"==typeof c.onreceipt?c.onreceipt(h):void 0);break;case"ERROR":v.push("function"==typeof o?o(h):void 0);break;default:v.push("function"==typeof c.debug?c.debug("Unhandled frame: "+h):void 0)}return v},this.ws.onclose=function(){var t;return t="Whoops! Lost connection to "+c.ws.url,"function"==typeof c.debug&&c.debug(t),c._cleanUp(),"function"==typeof o?o(t):void 0},this.ws.onopen=function(){return"function"==typeof c.debug&&c.debug("Web Socket Opened..."),u["accept-version"]=r.VERSIONS.supportedVersions(),u["heart-beat"]=[c.heartbeat.outgoing,c.heartbeat.incoming].join(","),c._transmit("CONNECT",u)}},n.prototype.disconnect=function(t,n){return null==n&&(n={}),this._transmit("DISCONNECT",n),this.ws.close(),this._cleanUp(),"function"==typeof t?t():void 0},n.prototype._cleanUp=function(){if(this.connected=!1,this.pinger&&r.clearInterval(this.pinger),this.ponger)return r.clearInterval(this.ponger)},n.prototype.send=function(t,n,e){return null==n&&(n={}),null==e&&(e=""),n.destination=t,this._transmit("SEND",n,e)},n.prototype.subscribe=function(t,n,e){var i;return null==e&&(e={}),e.id||(e.id="sub-"+this.counter++),e.destination=t,this.subscriptions[e.id]=n,this._transmit("SUBSCRIBE",e),i=this,{id:e.id,unsubscribe:function(){return i.unsubscribe(e.id)}}},n.prototype.unsubscribe=function(t){return delete this.subscriptions[t],this._transmit("UNSUBSCRIBE",{id:t})},n.prototype.begin=function(t){var n,e;return e=t||"tx-"+this.counter++,this._transmit("BEGIN",{transaction:e}),n=this,{id:e,commit:function(){return n.commit(e)},abort:function(){return n.abort(e)}}},n.prototype.commit=function(t){return this._transmit("COMMIT",{transaction:t})},n.prototype.abort=function(t){return this._transmit("ABORT",{transaction:t})},n.prototype.ack=function(t,n,e){return null==e&&(e={}),e["message-id"]=t,e.subscription=n,this._transmit("ACK",e)},n.prototype.nack=function(t,n,e){return null==e&&(e={}),e["message-id"]=t,e.subscription=n,this._transmit("NACK",e)},n}(),r={VERSIONS:{V1_0:"1.0",V1_1:"1.1",V1_2:"1.2",supportedVersions:function(){return"1.1,1.0"}},client:function(t,n){var i,o;return null==n&&(n=["v10.stomp","v11.stomp"]),i=r.WebSocketClass||WebSocket,o=new i(t,n),new e(o)},over:function(t){return new e(t)},Frame:i},"undefined"!=typeof window&&null!==window?(r.setInterval=function(t,n){return window.setInterval(n,t)},r.clearInterval=function(t){return window.clearInterval(t)},window.Stomp=r):void 0!==n&&null!==n?n.Stomp=r:self.Stomp=r}.call(void 0),n.default=Stomp}});
//# sourceMappingURL=Stomp.bundle.js.map