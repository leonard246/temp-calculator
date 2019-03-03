import React from 'react'
import ReactDOM from 'react-dom'

function BoilingVerdict(props) {
    if(props.celsius >= 100)
        return (<p>The water will boil</p>);
    
    return (<p>The water will not boil</p>);
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
        }; 
        
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <div>
                <legend>Enter temperature (celsius):</legend>
                <input
                    value={temperature}
                    onChange={this.handlechange} />
                <BoilingVerdict 
                    celsius={parseFloat(temperature)} />
            </div>
        );
    }
}


ReactDOM.render(<Calculator />,document.getElementById('root'));