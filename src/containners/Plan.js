import React from 'react'
import '../CSS/Plan.css'

class Plan extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        console.log(this.props)
        this.props.onSetPlan(this.props.match.params.planId)
    }
    render() {
        return (
            <div>
                {this.props.match.params.planId}
            </div>
        )
    }
}
export default Plan