import React from 'react';

const UserAgentInfo = () => {
    const userAgent = navigator.userAgent;

    return (
        <div>
            <h2>Welcome to 2022</h2>
            <p>User Agent: {userAgent}</p>
        </div>
    );
};

export default UserAgentInfo;
