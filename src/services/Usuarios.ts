import  { executeQuery }  from "./Firebird"

export async function getAllUsers(_req: any, res: any) {
    try {
        const result = await executeQuery('SELECT * FROM USUARIOS', []);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

export async function getUserById(uid: string, res: any) {
    try {
        const result: any = await executeQuery('SELECT * FROM USUARIOS WHERE UID = ?', [uid]);
        if (result.length === 0) {
            res.status(404).json({ message: 'No se encontró el usuario con el id proporcionado.' });
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export async function checkUserExists(uid: string, res: any) {
    try {
        const result: any = await executeQuery('SELECT * FROM USUARIOS WHERE UID = ?', [uid]);
        res.status(200).json({ userExists: result.length !== 0 });
    } catch (err) {
        res.status(500).json(err);
    }
}

export async function checkDniExists(dni: number, res: any) {
    try {
        const result: any = await executeQuery('SELECT * FROM USUARIOS WHERE DOCUMENTO = ?', [dni]);
        res.status(200).json({ dniExists: result.length !== 0 });
    } catch (err) {
        res.status(500).json(err);
    }
}

export async function addUser(user: any, res: any) {

    const query = `
        INSERT INTO USUARIOS(identidad, uid, documento, tipo, nombre, fecha_nacimiento, email, activo, clave, genero)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
        user.identidad,
        user.uid,
        user.documento || -1,
        user.tipo,
        user.nombre || '',
        user.fecha_nacimiento,
        user.email,
        user.activo,
        user.clave,
        user.genero
    ];
    try {
        await executeQuery(query, params);
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
}

export async function updateUser(uid: any, user: any, res: any) {
    const query = `
        UPDATE USUARIOS 
        SET documento = ?, nombre = ?, fecha_nacimiento = ?, activo = ?, genero = ?
        WHERE uid = ?
    `;
    
    const params = [
        user.documento || -1,
        user.nombre || '',
        user.fecha_nacimiento,
        user.activo,
        user.genero,
        uid
    ];

    try {
        await executeQuery(query, params);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
}
