export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  picture: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  }
};
