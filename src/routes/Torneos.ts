import { Router } from 'express';
import firebird from "node-firebird";
import { dbOptions } from "../db/Config";

const router = Router()

router.get("/torneos", function(_req, res){

    a(res);
});

function a(res: any){
    firebird.attach(dbOptions, function(err, db) {
        if (err) {
            return res.status(500).json(err);
        }
    
        db.query('SELECT * FROM TORNEOS', [], function(err, result){
            db.detach();
            if(err){
                return res.status(500).json(err);
            } else{
                return res.status(200).json(result);
            }
        });
    });
}

export default router
  