import React from 'react';

function Profile({ user }) {
    const { id, password} = user || {}

    return(
        <>
            <h1>Profile</h1>
            <dt>ID:</dt>
            <dd>{id}</dd>
            <dt>password</dt>
            <dd>{password}</dd>
        </>

    );
}
export default Profile;