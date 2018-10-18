import React from 'react'
import Button from '@material-ui/core/Button'
import '../CSS/Map.css'

class Map extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                5555
                {this.props.plans}
            </div>
        )
    }
}
export default Map