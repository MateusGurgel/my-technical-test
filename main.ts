import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import * as http from 'node:http';
import {Request, Response} from 'express';
import { loginController } from "./src/modules/user/presentation/controllers/login"
import dotenv from 'dotenv';
import { signUpController } from '@/modules/resellerAccount/presentation/controllers/signUp';

dotenv.config();


export const corsOptions = {
    origin: '*',
    credentials: true,
};

export const compressionOptions = {
    threshold: '1kb',
    filter: (req: Request, res: Response) => {
        if (res.getHeader('x-no-compression')) return false;
        if (res.statusCode === 304) return false;
        const type = res.getHeader('Content-Type') as string[];
        if (type && type.indexOf('text/event-stream') > -1) return false;
        return compression.filter(req, res);
    },
};

export const app = express();

app.use(compression(compressionOptions));
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.post('/login', async (req: Request, res: Response) => {
    const response = await loginController.handle({body: req.body});
    res.status(response.statusCode).json(response.body);
})

app.post('/singUp', async (req: Request, res: Response) => {
    const response = await signUpController.handle({body: req.body});
    res.status(response.statusCode).json(response.body);
})

app.listen(3000, 'localhost', async () => {});

let server: http.Server | null = null;


export function close() {
    if (!server) throw new Error('App has not been started');
    server.close();
}