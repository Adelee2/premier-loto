import { model, Schema, Document } from 'mongoose';
import { Fixture } from '@interfaces/fixtures.interface';

const fixtureSchema: Schema = new Schema({
  uniqueid: {
    type: String,
    required: true,
  },
  teamA: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  teamB: {
    type: Schema.Types.ObjectId,
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
  venue: {
    type: String,
    required: true,
  },
  contendingtitle: {
    type: Schema.Types.ObjectId,
    ref: 'Title',
  },
});

const fixtureModel = model<Fixture & Document>('Fixture', fixtureSchema);

export default fixtureModel;
