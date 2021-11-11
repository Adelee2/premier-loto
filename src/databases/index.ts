import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  url: 'mongodb+srv://premierloto:loto!1234=premier@cluster0.zf76w.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority', //`mongodb://${host}:${port}/${database}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
