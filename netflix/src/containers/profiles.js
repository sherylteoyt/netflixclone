import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Profiles } from '../components';

// setProfile is from BrowseContainer, but it is used to help select a profile
export function SelectProfileContainer({ user, setProfile }) {
    return (
    <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User>
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </>
    );
}