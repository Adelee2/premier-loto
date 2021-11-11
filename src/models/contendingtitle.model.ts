import { model, Schema, Document } from 'mongoose';
import { Title } from '@interfaces/contendingtitle.interface';

const titleSchema: Schema = new Schema({
  // eslint-disable-next-line prettier/prettier
  titlename: {   //UEFA, FACUP, LALIGA, LIGUE1
    type: String,
    required: true,
  },
  starttime: {
    type: Date,
    required: true,
  },
  proposedendtime: {
    type: Date,
    required: true,
  },
  description: {
    type: Text,
  },
});

const TitleModel = model<Title & Document>('Title', titleSchema);

export default TitleModel;
