import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
import app from './app';

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`🥳 Server ready at http://localhost:${port}`);
    });
}