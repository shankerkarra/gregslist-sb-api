

export default class House {

  constructor({ id, bedrooms, bathrooms, levels, imgUrl, year, price, description }) {
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.imgUrl = imgUrl
    this.year = year
    this.price = price
    this.description = description || "no description provided for the house yet"

    //  - required	bedrooms, bathrooms, levels, year, price
    // not required imgUrl description
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
      
          <img src="${this.imgUrl}" class="w-100" alt="${this.bedrooms} ${this.bathrooms} House image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.bedrooms} - ${this.bathrooms}- ${this.year} -  ${this.levels}</b></p>
              </div>
              <p><em>MLS Id: ${this.id}</em></p>
              <p><em>$${this.price}</em></p>
              <p>${this.description}</p>
        <button class="btn btn-warning btn-block" onclick="app.housesController.modifyHouse('${this.id}')"> Modify </button>
              <button class="btn btn-warning btn-block" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
          </div>
       </div>
      </div>
    `
  }
}
