import React, { Component } from 'react';
import ProfileDelCfm from '../components/ProfileDelCfm';
import ProfileList from '../components/ProfileList';

class ProfileWrapper extends Component {

    render() {
        return (
            <div id="profileWrapper" className="drawer-select flex">
                <ProfileList />
                <ProfileDelCfm />
            </div>
        );
    }
}

export default ProfileWrapper;