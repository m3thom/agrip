import React from 'react'
import Plan from '../containners/Plan'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../CSS/Plan.css'

class PlanList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr />
                    <Route path="/:planId" render={(props) => <Plan {...props} {...this.props} />} />
                </div>
            </Router>

        )
    }
}
export default PlanList