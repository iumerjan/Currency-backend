import { Currency } from '../../Models/currency/currencyDocumentSchema';

export class CurrencyController {

    // Get all currencies
    public getCurrencies(req, res, next) {

        Currency
            .find({ is_deleted: false }, { code: 1, name: 1 }, (err, doc) => {
                if (err) {
                    next(err);
                }
                return res.status(200).send(doc);
            });
    }
}