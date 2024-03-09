import { ConstantsResponse } from "../../../constants/constants";
import { query } from "../../../database/database";
import ExpressReviewsError from "../../error/expressReviewError";

class FreeQuery{

    table: string;

    constructor(table: string){
        this.table=table;
    }

    async exec(fields: string, complement: string){
        try {
            const result = await query(`SELECT ${fields} FROM ${this.table} ${complement}`);
            return result.rows
        } catch (error) {
            throw new ExpressReviewsError("Error en la solicitud de data",
                ConstantsResponse.INTERNAL_SERVER_ERROR, "Error Class Query", "Metodo free", error);
        }
    }
};

export default FreeQuery;
