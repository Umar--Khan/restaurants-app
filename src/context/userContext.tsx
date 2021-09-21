import React, { createContext, PropsWithChildren, ReactNode } from 'react';

import { User, user } from 'service/__mocks__/user';

const UserContext = createContext({} as User);

const UserProvider = ({ children }: PropsWithChildren<ReactNode>) => {
  // This is where I could make an API call to get user details
  const userDetails = user;

  return (
    <UserContext.Provider value={userDetails}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
