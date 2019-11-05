import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/navbar.sass';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="page">
                    <nav className="navbar">
                        <div className="logo"><a href="/">Talha Malik.</a></div>
                        <div>
                            <ul>
                                <li><a href="/articles/">Articles</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<NavBar/>, document.getElementById("navbar"));
