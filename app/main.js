//import ValuesController from "./Controllers/ValuesController.js";
import HousesController from "./Controllers/HousesController.js"


class App {
  //valuesController = new ValuesController();
  housesController = new HousesController();
}

window["app"] = new App();
