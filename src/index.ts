import dotenv from 'dotenv';
dotenv.config();

import { App } from './app';

const app = new App().createServer();
const port = process.env.PORT;

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`🥳 Server ready at http://localhost:${port}`);
    });
}