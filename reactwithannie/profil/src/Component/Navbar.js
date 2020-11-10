import React, { Component } from 'react';
import "./Navbar.css"
import Footer from './Footer';
import Main from './Main';
class Navbar extends Component {
    state = {
        menu: [
            "About Hanieh | ",
            "UX Design | ",
            "Developpement Application web | ",
            "Graphic design works | ",
            "Contact Hanieh"
        ]
    }
    render() {
        return (
            <div>
                <div className="Navbar">
                    {this.state.menu.map((items) => {
                        return <>{items}</>
                    })


                    }
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Navbar;