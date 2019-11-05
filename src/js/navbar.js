import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/navbar.sass';

class NavBar extends Component {
    render() {
        return (
            <div className="page">
                <nav className="navbar">
                    <div className="logo"></div>
                    <div>
                        <ul>
                            <li>Blog</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

ReactDOM.render(<NavBar/>, document.getElementById("navbar"));
