import { Router } from 'express';
import { 
    addJugador,
    getAllJugadores,

}from '../services/Jugadores';

const router = Router()

router.get("/jugadores", function(req, res){
    getAllJugadores(req,res);
});

router.post("/jugadores", function(req, res){
    addJugador(req.body,res);
});

export default router