import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {

  constructor() {
    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })
    _draw()
  }
  async createHouse() {
    try {
      event.preventDefault()
      let form = event.target
      let rawHouse = {
        id: form.id.value,
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        levels: form.levels.value,
        imgUrl: form.imgUrl.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value
      }
      await housesService.createHouse(rawHouse)
      form.reset()
    }
    catch (error) {

      console.error(error)
      window.alert(error.message)
    }
  }
  deleteHouse(id) {
    console.log('you are trying to delete a house by the id of', id)
    housesService.deleteHouse(id)
  }
  modifyHouse(id) {
    let houseToModify = ProxyState.houses.find(h => h.id == id)
    console.log('your are modifying the house with the id of', id)

    let editable = {
      getElementById("bathrooms").value = houseToModify.bathrooms
      levels: houseToModify.levels,
    }
    console.log(editable);


    housesService.modifyHouse(id)
  }
}