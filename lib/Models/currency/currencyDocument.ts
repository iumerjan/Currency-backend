import * as mongoose from "mongoose";
import { ICurrency } from "./currency";
export interface ICurrencyDocument extends ICurrency, mongoose.Document {
}