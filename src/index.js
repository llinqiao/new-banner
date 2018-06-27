import { h, app } from "hyperapp"

const state = {
  index: 0,
  amount: 4,
}

const actions = {
  next: function(value){
    return(
      function(state){
        var newIndex;
        if(state.index>=state.amount-1){
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
  },

  previous:function(value){
    return(
      function(state){
        var newIndex;
        if(state.index<=0){
          newIndex=state.amount-1
        }else{
          newIndex=state.index-1
        }
        var obj={
          index:newIndex
        }
        return obj;
      }
    )
  },

  /*second:function(value){
    return(
      function(state){
        index:value-1
      }
    )
  }*/
}

const view = (state, actions) => (
  <div className="container">
    <div className="container-border center">
        <div className="carousel"
         style={{
          transform: "translateX(" + -1*state.index*500 + "px)"
          }}>
          <img src="./images/photo1.png"/>
			    <img src="./images/photo2.png"/>
			    <img src="./images/photo3.png"/>
			    <img src="./images/photo4.png"/>
        </div>
        <button className="arrow right-arrow" onclick={() => actions.next(1)}>右边</button>
        <button className="arrow left-arrow" onclick={() => actions.previous(1)}>左边</button>
        <div class="buttons">
				  <span class="term onTerm">1</span>
				  <span class="term  onclick={() => actions.second(2)}">2</span>
				  <span class="term">3</span>
				  <span class="term">4</span>
			  </div>
    </div>
  </div>
)

app(state, actions, view, document.body)

