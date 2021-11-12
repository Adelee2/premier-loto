import { model, Schema, Document } from 'mongoose';
import { Team } from '@interfaces/teams.interface';

const teamSchema: Schema = new Schema({
  clubname: {
    type: String,
    required: true,
    unique: true,
  },
  abrv: {
    type: String,
    required: true,
  },
  history: {
    type: String,
  },
});

const teamModel = model<Team & Document>('Team', teamSchema);

export default teamModel;
