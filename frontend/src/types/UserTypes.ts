export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  picture: string;
  address: {
    addresLine: string;
    city: string;
    state: string;
    country: string;
  }
};
