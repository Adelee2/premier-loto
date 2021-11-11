export interface User {
  toJSON(): { [x: string]: any; password: any };
  _id: string;
  email: string;
  password: string;
  fullName: string;
  country: string;
  userrole: string;
  ip: string;
  accounttype: string;
}
