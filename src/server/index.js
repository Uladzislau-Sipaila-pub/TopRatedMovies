import { Server } from 'http';
import app from './app';

const server = new Server(app);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});