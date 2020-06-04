//更新队列
export let updateQueue = {
    updaters:[], //放着将要执行的代码
    isPending:false, //是否批量更新  true  处于批量更新
    add(updater){
        this.updaters.push(updater)
    },
    //需要调用batchUpdate方法才会更新
    batchUpdate(){
        let {updaters} = this;
        let updater;
        while(updater = updaters.pop()){
            updater.updateComponent()
        }
    }
}
class Updater{
    constructor(componentInstance){ //一个Update 和一个类组件的实例是一对一的关系
        this.componentInstance =componentInstance;
        this.pendingState = [];//更新可能是批量，如果处于批量更新需要把分状态都先暂存这个数组，最后在更新的时候统一合并
        this.nextProps=null;//新的属性对象
    }
    addState(partialState){
        this.pendingState.push(partialState) //把新状态放进数组中
        this.emitUpdate() //开始视图更新
    }
    emitUpdate(nextProps){ //可能会传一个新的属性对象过来
        this.nextProps = nextProps
        //如果传递了新的属性对象或当前非批量更新模式的话就直接更新，否则先不更新
        if(nextProps || !updateQueue.isPending){
            this.updateComponent()
        }else{
            updateQueue.add(this)
        }
    }
}

class Component {
    constructor(props){
        this.props = props;
        this.$updater = new this.$updater(this); //this就是类组件的实例
        this.state = {};  //当前状态
        this.nextProps=null;//下一个属性状态
    }
    //批量更新  partialState部分  状态可能被合并
    setState(partialState){
        this.$updater.addState(partialState) 
    }
}


Component.prototype.isReactComponent = {}

export {
    Component
}