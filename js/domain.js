// 跨越解决方案

// 1.JSONP JSONP 的原理很简单，就是利用 <script> 标签没有跨域限制的漏洞。通过 <script> 标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。
// 不常用
function JSONP(url,jsonpCallback, success){
    var script = document.createElement('script');
    script.url = url;
    script.async = true;
    script.type = "text/javascript";
    window[jsonpCallback] = function(data){
        success && success(data)
    }
    document.body.appendChild(script);
}
// 调用
JSONP('http://xvideo.com',jsonpCallback,function(data){
    console.log(data);
})

//2. CORS 

// CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现。

// 浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。

// 服务端设置 Access - Control - Allow - Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。


// 3. document.domain 可以思考思考如何做单点登录和cookie跨域
// 该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。

// 只需要给页面添加 document.domain = 'test.com' 表示二级域名都相同就可以实现跨域

// 4. postMessage
// 这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息

// 发送消息端
window.parent.postMessage('message', 'http://test.com');
// 接收消息端
var mc = new MessageChannel();
mc.addEventListener('message', event => {
    var origin = event.origin || event.originalEvent.origin
    if (origin === 'http://test.com') {
        console.log('验证通过')
    }
})