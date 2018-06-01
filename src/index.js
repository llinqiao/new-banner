import { h, app } from "hyperapp"

const state = {
  index: 0
}

const actions = {
  next: value => state => ({ index: state.index - value }),
  previous: value => state => ({ index: state.index + value })
}

const view = (state, actions) => (
  <div className="container">
    <div className="container-border center">
        <div className="carousel" style={"transform:translateX(" + state.index*500 + "px)"}>
      <img src="./images/photo1.png"/>
			<img src="./images/photo2.png"/>
			<img src="./images/photo3.png"/>
			<img src="./images/photo4.png"/>
        </div>
        <button className="arrow arrow-right" onclick={() => actions.next(1)}>右边</button>
        <button className="arrow arrow-right" onclick={() => actions.previous(1)}>左边</button>
    </div>
  </div>
)

app(state, actions, view, document.body)

