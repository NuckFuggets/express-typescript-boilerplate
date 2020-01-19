import fs from 'fs';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import routes from './routes/index';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/error';

const app = express();

const accessLogSteam = fs.createWriteStream(
    path.join(__dirname, '../access.log'),
    { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogSteam }));

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
