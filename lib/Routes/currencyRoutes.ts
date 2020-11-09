import { CurrencyController } from "../Controllers/currency/currencyController";
export class Routes {

    public currencyController: CurrencyController = new CurrencyController();
    public routes(app): void {
        
        // Get all currencies
        app.route('/api/currency/get-all')
         .get(this.currencyController.getCurrencies);

    }

}