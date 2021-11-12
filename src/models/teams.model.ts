import { model, Schema, Document } from 'mongoose';
import { Team } from '@interfaces/teams.interface';

const teamSchema: Schema = new Schema({
  clubname: {
    type: String,
    required: true,
  },
  abrv: {
    type: String,
    required: true,
  },
  history: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updateAt: {
    type: Date,
  },
});

const teamModel = model<Team & Document>('Team', teamSchema);

export default teamModel;
