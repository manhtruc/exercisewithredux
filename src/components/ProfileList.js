import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';

class ProfileList extends Component {


    addItemToNameGame = () => {
    }

    render() {
        console.log(this.props.dataName)
        return (
            <div>
                <div id="profileList" className="scrollable">
                    {
                        this.props.dataName.map((value, key) => {
                            return (
                                <div key={key} className={"profile-item no-edit " + value.class}>
                                    {value.name}
                                </div>
                            )
                        })
                    }

                    <input id="profileRename" className="profile-item" placeholder="Enter Profile Name" maxLength={25} />
                </div>
                <Toolbar addItemToNameGame={() => this.addItemToNameGame()} />
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dataName: state.name
    }
}
export default connect(mapStateToProps)(ProfileList)