require("./style.css");
import React, {Component} from 'react';
import {render} from "react-dom";


class HelloMessage extends Component {
    render() {
        return (
            <div>Hello</div>
        )
    }
}
render(<HelloMessage />, document.getElementById('app'));




