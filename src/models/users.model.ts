import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
  },
  country: {
    type: String,
  },
  userrole: {
    type: String,
  },
  accounttype: {
    type: String,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
