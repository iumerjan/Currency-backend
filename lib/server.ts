import app from "./app";
const PORT = 3000;
import { Db as Db } from "../data/db";
import { Bootstrap } from "./bootstrap";

Db.connect();
Bootstrap.populateCurrencies();
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})