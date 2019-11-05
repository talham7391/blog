import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/thesedays.sass';

class TheseDays extends Component {
    render() {
        return (
            <div className="these-days">
                <p>These days I've been learning about <a href="www.google.ca">project scoping & planning.</a></p>
            </div>
        )
    }
}

ReactDOM.render(<TheseDays/>, document.getElementById("these-days"));
