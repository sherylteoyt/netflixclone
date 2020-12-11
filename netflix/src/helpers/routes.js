import React, { useReducer } from 'react';
import { Redirect, Route } from 'react-router-dom';

// IsUserRedirect: check if user is logged in - if so, redirect them to browse page
// function #2: protected routes - need to protect the browse page

// follow authentication from react router page 

// pass in user, loggedInPath
// if there is no user, want to return children
// check for user object - call component, need to pass down user object 
// can check for loggedInPath - if we pass a path of sign in (can pass as rest statement, don't need to specify prop path)
// then use loggedInPath to send them to it 
// path of sign in and they are a user - will redirect to loggedInPath
// if not a user and they hit sign in - will hit (return) children, which is the component page for sign in/sign up 
export function IsUserRedirect ({ user, loggedInPath, children, ...rest }) {
    return (
        <Route 
            {...rest}
            render={() => {
                if(!user) {
                    return children;
                }
                if(user) {
                    return (
                        <Redirect
                        to={{
                            pathname: loggedInPath
                        }}
                        />
                    );
                }
                // if all situations did not occur
                return null;
            }}
        />
    );
}

export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route 
          {...rest}
          render={({ location }) => {
              if(user) {
                  return children;
              }

              if(!user) {
                  return (
                      <Redirect
                      to={{
                          pathname: 'signin',
                          // to preserve history - give pathname to signin page
                          state: { from: location },
                      }}
                      />
                  )
              }

              return null;
          }}
        />
    )
}