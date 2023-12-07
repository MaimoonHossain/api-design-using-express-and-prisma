import * as dotenv from 'dotenv';
dotenv.config();
import app from './server';

app.listen(process.env.PORT, () => {
  console.log('Server is listening on port 3002');
});
