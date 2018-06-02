import { h, app } from "hyperapp"

const state = {
  index: 0,
  amount: 4,
}

const actions = {
  next: value => state => ({ index: state.index - value }),
  /*function(value){
    return(
      function(state){
        var newIndex;
        if(newIndex=-state.amount+1){
          newIndex=0
        }else{
          newIndex=state.index+1
        }
        var obj={
          index:newIndex
        }
        return obj;
      } 
    )
  },*/

  previous:value => state => ({ index: state.index + value })
}
  /*function(value){
    return(
      function(state){
        var nexIndex;
        if(newIndex=0){
          newIndex=-state.amount+1
        }else{
          newIndex=state.index-1
        }
        var obj={
          index:newIndex
        }
        return obj;
      }
    )
  }
}*/

const view = (state, actions) => (
  <div className="container">
    <div className="container-border center">
        <div className="carousel" style={"transform:translateX(" + state.index*500 + "px)"}>
          <img src="./images/photo1.png"/>
			    <img src="./images/photo2.png"/>
			    <img src="./images/photo3.png"/>
			    <img src="./images/photo4.png"/>
        </div>
        <button className="arrow right-arrow" onclick={() => actions.next(1)}>右边</button>
        <button className="arrow left-arrow" onclick={() => actions.previous(1)}>左边</button>
    </div>
  </div>
)

app(state, actions, view, document.body)

