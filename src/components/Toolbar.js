import React, { Component } from 'react';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar flex">
                <div onClick={this.props.addItemToNameGame} className="icon add" id="profileAdd" />
                <div className="icon edit" id="profileEdit" />
                <div className="icon delete" id="profileDelete" />
                <div className="icon down" id="profileDown" />
                <div className="icon up disabled" id="profileUp" />
            </div>
        );
    }
}

export default Toolbar;