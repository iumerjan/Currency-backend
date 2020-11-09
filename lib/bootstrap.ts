
import { Currency } from "./Models/currency/currencyDocumentSchema";
export class Bootstrap {

    public static async populateCurrencies() {
        let currencies = require('./json/currencies.json');
        for (let i = 0; i < currencies.length; i++) {
            const currency = currencies[i];
            // Create currency entries
            Bootstrap.addCurrencies(currency);
        }

    }

    private static addCurrencies(data) {
        Currency.findOne({ name: data.name, code: data.code }, { name: 1 }, (err, res) => {
            if (err) {
                console.log(err);
            }
            else if (res) {
                console.log(`${res.name} currency already exists.`);
            }
            else {
                const newCurrency = new Currency({
                    name: data.name,
                    code: data.code,
                });
                newCurrency.save((err, docCurrency) => {
                    if (err) {
                        console.log(err);
                        console.log(`Unable to create ${data.name}`);
                    }
                    else {
                        console.log(`${docCurrency.name} currency added sucessfully.`);

                    }
                });
            }
        })


    }

}