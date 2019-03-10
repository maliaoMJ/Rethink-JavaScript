// 自定义事件
// 1. 第一种利用customEvent
// 创建事件对象
let customEvent = new CustomEvent("customEventName", {
    detail:{
        data: "hello customEvent"
    }
});

// 分派事件对象
document.dispatchEvent(customEvent);
// 监听事件
document.addEventListener('customEventName', (e)=>{
    console.log(e.detail.data); // "hello customEvent"
});
// 2. 第二种利用createEvent
// 创建事件对象
let customCreateEvent = new createEvent('customEventName');
// 初始化事件对象
customCreateEvent.initCustomEvent("ev", false, true, {data: "hello createEvent"});
// 分派事件
document.dispatchEvent(customCreateEvent);
// 监听事件
document.addEventListener('ev',e=>{
    console.log(e.detail.data) // "hello createEvent"
});