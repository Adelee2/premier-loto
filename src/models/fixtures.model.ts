import { model, Schema, Document, Types, ObjectId } from 'mongoose';
import { Fixture } from '@interfaces/fixtures.interface';
import * as mongoose from 'mongoose';

const fixtureSchema: Schema = new Schema({
  uniqueid: {
    type: String,
    required: true,
  },
  teamA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  teamB: {
    type: mongoose.Schema.Types.ObjectId,
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
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
  venue: {
    type: String,
    required: true,
  },
  contendingtitle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Title',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const fixtureModel = model<Fixture & Document>('Fixture', fixtureSchema);

export default fixtureModel;
