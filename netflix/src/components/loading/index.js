import React from 'react';
import { Spinner, LockBody, ReleaseBody, Picture } from './styles/loading';

// lock body of entire page, don't allow scrolling - create LockBody component
export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
        </Spinner>
    );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
};