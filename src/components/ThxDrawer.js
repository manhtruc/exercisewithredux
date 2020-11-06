import React, { Component } from 'react';
import ProfileWrapper from '../components/ProfileWrapper';


class ThxDrawer extends Component {
    render() {
        return (
            <div className="thx-drawer flex">
                <div className="main-title">
                    Profile List
            </div>
                <ProfileWrapper />
            </div>
        );
    }
}

export default ThxDrawer;