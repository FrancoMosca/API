import express, { Application } from 'express';
import cors from "cors";

//Routes
import clubesRoute from "../routes/Clubes";
import torneoRoute from "../routes/Torneos";
import jugadorRoute from "../routes/Jugadores";
import federacionesRoute from "../routes/Federaciones";
import usersRoute from '../routes/Usuarios';

class Server{

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() { 
        this.app.use('/',clubesRoute);
        this.app.use('/',torneoRoute);
        this.app.use('/',jugadorRoute);
        this.app.use('/',federacionesRoute);
        this.app.use('/',usersRoute);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Server running at ' + this.port );
        })
    }
}

export default Server