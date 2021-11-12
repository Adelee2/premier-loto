import { model, Schema, Document, Types } from 'mongoose';
import { Fixture } from '@interfaces/fixtures.interface';

const fixtureSchema: Schema = new Schema({
  uniqueid: {
    type: String,
    required: true,
  },
  teamA: {
    type: Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  teamB: {
    type: Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  playofftime: {
    type: Date,
    required: true,
  },
  matchdate: {
    type: Date,
    required: true,
  },
  status: {
    type: ['pending', 'completed'],
    default: 'pending',
  },
  venue: {
    type: String,
    required: true,
  },
  contendingtitle: {
    type: Types.ObjectId,
    ref: 'Title',
  },
});

const fixtureModel = model<Fixture & Document>('Fixture', fixtureSchema);

export default fixtureModel;
