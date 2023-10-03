// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  clickMe = () => {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  render() {
    const {count} = this.state
     
    return (
      <div className="bgContainer">
        <h1 className="heading">
          The Button has been clicked <span className="special">{count} </span>
          times
        </h1>
        <p className="hit">Click the button to increase the counts!</p>
        <button className="btn" onClick={this.clickMe}>
          Click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
