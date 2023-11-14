import firebird from "node-firebird";
import { dbOptions } from "../db/Config";


export async function executeQuery(query: string, params: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
        firebird.attach(dbOptions, (err: any, db: any) => {
            if (err) reject(err);
            db.query(query, params, (err: any, result: any) => {
                db.detach();
                if (err) reject(err);
                resolve(result);
            });
        });
    });
}

