import { Router } from 'express';
import { 
        getAllUsers,
        getUserById,
        addUser,
        checkUserExists,
        updateUser,
        checkDniExists
} from'../services/Usuarios';


const router = Router()

router.get("/users", function(req, res){
    getAllUsers(req,res);
});

router.get("/users/:id", function(req, res){
    getUserById(req.params.id, res);
});

router.get("/users/exists/:id", function(req, res){
    checkUserExists(req.params.id, res);
});

router.get("/users/dni/exists/:dni", function(req, res){
    checkDniExists(Number(req.params.dni), res);
});

router.post("/users", async function(req, res){
    addUser(req.body, res)
});

router.put("/users/:id", function(req, res){
    updateUser(req.params.id, req.body, res);
});


export default router

