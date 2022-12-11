import {containerMemoria} from `./containerMemoria.js`
import createKnexClient from `knex`
import Connection from "mysql2/typings/mysql/lib/Connection";

const clienteSql = createKnexClient({
    cliente: `mysql2`,
    Connection:`mysql://localhost:3306/productos`
})

class containerSql {
    constructor(clientesql, tabla) {
        this.cliente = clientesql;
        this.tabla = tabla
    }

    async guardar(cosas) {
        await this.cliente(this.tabla).insert(cosas);
    }

    async recuperar() {
        return await this.cliente(this.tabla).select();
    }
}

export const containerDeCosas = new containerMySql(clienteSql, `productos`);