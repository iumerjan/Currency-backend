import * as mongoose from "mongoose";
import { ICurrencyDocument } from "./currencyDocument";

let currencySchema = new mongoose.Schema(
    {
        name: String,
        code: String,
        value: Number,
        is_deleted: {
            type: Boolean,
            default: false
        }, // used for soft deletion of currency

    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

export let Currency: mongoose.Model<ICurrencyDocument> = mongoose.model<ICurrencyDocument>("currency", currencySchema);
