import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from './AxiosService.js';

class HousesService {

  constructor() {
    this.getAllHouses()
  }
  async createHouse(rawHouse) {
    console.log('creating house')
    const res = await api.post('houses', rawHouse)
    console.log('your new house', res.data)
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }
  async getAllHouses() {
    try {
      const res = await api.get('houses')
      console.log(res.data)
      ProxyState.houses = res.data.map(h => new House(h))
    } catch (error) {
      console.error(error)
    }
  }

  async deleteHouse(id) {
    try {
      const res = await api.delete('houses/' + id)
      console.log(res.data)
      ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
    } catch (error) {
      console.error(error)
    }

  }
  async modifyHouse(id) {

    try {
      let foundHouse = ProxyState.houses.find(h => h.id == id)
      foundHouse.description = ' Modified by Shanker Karra'
      const res = await api.put('houses/' + id, foundHouse)
      console.log('updated House', res.data)

      ProxyState.houses = ProxyState.houses
    } catch (error) {
      console.error(error)
    }

  }
}

export const housesService = new HousesService()
