import React, { Component } from 'react';
import '../CSS/App.css'
import PlanList from '../containners/PlanList'
import Map from '../containners/Map'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: []
    }
  }
  onSetPlan = (plans) => {
    this.setState({ plans })
  }
  render() {
    return (
      <div className="App">
        <PlanList
          onSetPlan={this.onSetPlan}
        />
        <Map
          {...this.state}
        >

        </Map>
      </div>
    );
  }
}

export default App;
