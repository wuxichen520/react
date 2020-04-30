/**合成事件：
 * 1.可屏蔽浏览器差异   不同浏览器绑定事件和触发事件的方法不一样
 * 2.合成事件可以实现事件对对象的复用 ，重用，减少垃圾回收，提高性能
 * 3.因为默认实现批量更新   setState  两个setState合并一次更新也是在合成事件中
 * 
 * 
 * 在React中  并不是把事件绑定在DOM节点中，而是绑定在document上，类似事件委托
 * @param {*} dom        要绑定事件的dom节点
 * @param {*} eventType 事件类型 onClick  onChange
 * @param {*} listener  事件处理函数
 */
export function addEvent(dom,eventType,listener){

    eventType = eventType.toLowerCase();  //onClick=>onclick

    //在要绑定的dom节点上挂在一个对象，准备存放监听函数
    let eventStore = dom.eventStore || (dom.eventStore = {});
 
    //eventStore.onclick = () =>{alert('hello)}
    eventStore[eventType] = listener;
    //document.addEventListener('click',dispatchEvent)
    //第1阶段捕获，第二阶段冒泡
    document.addEventListener(eventType.slice(2),dispatchEvent,false)
    // document.attachEvent()
}

//真正的事件触发的回调统一是dispatchEvent方法
let syntheticEvent;  //合成事件
function dispatchEvent(event){  //event就是原来的事件对象  ，但是传递给我们监听函数并不是它
    console.log(event)
    let {type,target} = event  
   
    //type=click  target = button
    let eventType = 'on' + type;//onclick
    syntheticEvent = getSyntheticEvent(event);
    //模拟事件冒泡
    while (target) {
        let {eventStore} = target;
        let listener = eventStore && eventStore[eventType]  //onclick   eventStore={onclick:()=>{alert('hello)}}
        if(listener){  //alert('hello)
        
                listener.call(target,syntheticEvent)
           
        }
        target = target.parentNode
    }
    for (let key in syntheticEvent) {  
        syntheticEvent[key] = null;  
    }
}

function getSyntheticEvent(nativeEvent){ //合成对象
    if(!syntheticEvent){ 
        syntheticEvent = {persist}
    }
    syntheticEvent.nativeEvent = nativeEvent;
    syntheticEvent.currentTarget = nativeEvent;
    //把原生事件对上的方法和属性都拷贝合成事件上
    for (let key in nativeEvent){
        if(typeof nativeEvent[key] == 'function'){ //为了this出问题
            syntheticEvent[key] = nativeEvent[key].bind(nativeEvent)
        }else{
            syntheticEvent[key] = nativeEvent[key]
        }
    }
    return syntheticEvent
}

// function getSyntheticEvent(){

// }
function persist() {
    syntheticEvent = {persist}
}