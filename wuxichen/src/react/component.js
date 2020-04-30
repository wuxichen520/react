
class Updater{
    constructor(componentInstance){ //一个Update 和一个类组件的实例是一对一的关系
        this.componentInstance =componentInstance;
        this.pendingState = [];//更新可能是批量，如果处于批量更新需要把分状态合并
        this.nextProps=null;//新的属性对象
    }
    addState(partialState){
        this.pendingState.push(partialState) //把新状态放进数组中
        this.emitUpdate() //开始视图更新
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