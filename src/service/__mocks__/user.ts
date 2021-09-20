type UserLocation = {
  firstLine: string;
  postcode: string;
};

export interface User {
  firstName: string;
  lastName: string;
  location: UserLocation;
}

export const user: User = {
  firstName: 'Amanda',
  lastName: 'Barr',
  location: {
    firstLine: 'Leigh woods',
    postcode: 'BS8 4ES',
  },
};
