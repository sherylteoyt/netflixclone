import React, { useState, useContext, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';

export function BrowseContainer({ slides }) {
    const[profile, setProfile] = useState({});
    const[loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    // set if conditionals - if we have a profile.displayname, go ahead and display the browse page
    // need to show loading transition from profile selection to browse container - fire loading state
    // if we don't, show the profile container 
    return profile.displayName ? (
        loading ? <Loading src={user.photoURL} /> : null
    ) : <SelectProfileContainer user={user} setProfile={setProfile}/>;
}
