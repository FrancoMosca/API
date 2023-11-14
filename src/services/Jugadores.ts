import  { executeQuery }  from "./Firebird"

export async function getAllJugadores(_req: any, res: any) {
    try {
        const result = await executeQuery('SELECT * FROM JUGADORES', []);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

export async function addJugador(jugador: any, res: any){
    const query = `
        INSERT INTO JUGADORES(identidad, nombre, club, categoria, activo, rating, categoria_edad, federacion, usuario)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let params= [
        jugador.identidad,
        jugador.nombre,
        jugador.club,
        jugador.categoria,
        jugador.activo,
        jugador.rating,
        jugador.edad,
        jugador.federacion,
        jugador.uid
    ];

    console.log(jugador);
    
    try {
        await executeQuery(query, params);
        res.status(201).json({ message: 'User created successfully' });
    } catch (err: any) {
        res.status(500).json({ error: err.message }); 
    }
}