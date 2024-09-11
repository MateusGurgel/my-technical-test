import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import * as http from 'node:http';
import {Request, Response} from 'express';
import { loginController } from "./src/modules/user/presentation/controllers/login"
import dotenv from 'dotenv';
import { signUpResellerAccountController } from '@/modules/resellerAccount/presentation/controllers/signUpResellerAccount';
import { signUpShopkeeperAccountController } from '@/modules/shopkeeperAccount/presentation/controllers/signUpShopkeeperAccount';
import { createTransferController } from '@/modules/transaction/presentation/controllers/createTransfer';

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
    let response: any = { body: {}, statusCode: 200, contentType: 'json' };

    try {
        response = await loginController.handle({body: req.body});
    } catch (error: unknown) {
            
        console.error(error);

        if (error instanceof Error) {
            response = { body: {message: error.message}, statusCode: 400, contentType: 'json' };
        }
    }
    finally{
        res.status(response.statusCode).json(response.body);
    }

})

app.post('/resellers/singUp', async (req: Request, res: Response) => {

    let response: any = { body: {}, statusCode: 200, contentType: 'json' };

    try {
        response = await signUpResellerAccountController.handle({body: req.body});
    } catch (error: unknown) {
            
        console.error(error);

        if (error instanceof Error) {
            response = { body: {message: error.message}, statusCode: 400, contentType: 'json' };
        }
    }
    finally{
        res.status(response.statusCode).json(response.body);
    }

})

//Enquanto não temos middleare de autenticação, vamos passar o senderId na rota
app.post('/resellers/:senderId/transactions', async (req: Request, res: Response) => {
    const senderId = req.params.senderId;
    const { reciverId, value } = req.body;

    let response: any = { body: {}, statusCode: 200, contentType: 'json' };

    try {
        response = await createTransferController.handle({body: {senderId, reciverId, value}});
    } catch (error: unknown) {
            
        console.error(error);

        if (error instanceof Error) {
            response = { body: {message: error.message}, statusCode: 400, contentType: 'json' };
        }
    }
    finally{
        res.status(response.statusCode).json(response.body);
    }
})

app.post('/shopkeepers/singUp', async (req: Request, res: Response) => {
    
    let response: any = { body: {}, statusCode: 200, contentType: 'json' };

    try {
        response = await signUpShopkeeperAccountController.handle({body: req.body});
    } catch (error: unknown) {
            
        console.error(error);

        if (error instanceof Error) {
            response = { body: {message: error.message}, statusCode: 400, contentType: 'json' };
        }
    }
    finally{
        res.status(response.statusCode).json(response.body);
    }

})

app.listen(3000, 'localhost', async () => {});

let server: http.Server | null = null;

export function close() {
    if (!server) throw new Error('App has not been started');
    server.close();
}