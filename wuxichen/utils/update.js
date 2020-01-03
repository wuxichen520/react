// let update = [];
// let updateQueue = [];
// let state = {number:0}
// function setState(newState){
//     updateQueue.push(newState)
// }

// setState({number:state.number +1})
// setState({number:state.number +1})
// setState({number:state.number +1})

// updateQueue.forEach(newState => state = newState)
// console.log(state)





class Counter  {
    constructor(props) {
        this.state = {name:"ww", number: 0 };
        this.batchUpdate = false
        this.updateQueue = [];
        this.callbackQueue=[]
    }
    setState(partialState,callback){
        if( this.batchUpdate){
            this.updateQueue.push(partialState)
            if(callback){
                this.callbackQueue.push(callback)
            }
            
        }else{
            this.state = typeof partialState == 'function'?partialState(this.state) : partialState
        }

    }
    flushUpdate(){
       let state = this.state
       for(let i =0; i < this.updateQueue.length; i++){
        let partialState =  typeof this.updateQueue[i] == 'function'?this.updateQueue[i](state) : this.updateQueue[i]
        this.state = {...state,...partialState}; //合并
       }
     
       this.callbackQueue.forEach(callback=>callback())
       this.batchUpdate = false
    }
    add(){
        this.batchUpdate = true //开启批量更新
        this.setState({number:this.state.number +1})
        this.flushUpdate()
    }
}
let c = new Counter();
c.add()
console.log(c.state)







