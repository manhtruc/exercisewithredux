import React, { Component } from 'react';

class ProfileDelCfm extends Component {
    render() {
        return (
            <div id="profileDelCfm" className="profile-del alert flex">
                <div className="title">delete eq</div>
                <div className="body-text t-center" id="delName">delete eq</div>
                <div className="thx-btn" id="cfmDelete">delete</div>
            </div>
        );
    }
}

export default ProfileDelCfm;