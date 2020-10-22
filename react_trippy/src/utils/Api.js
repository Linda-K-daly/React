import { Config } from "../../src/Config";

class Api {
  getHome() {
    return fetch(`${Config.host}/api/home`)
      .then((res) => res.json())
      .then((json) => json);

    {
      //     const myCities = json.cities.map((elem)=>{
      //       return {
      //         name: elem.name,
      //         slug: elem.slug,
      //         source: elem.source,
      //       }
      //     })
      // // console.log('je suis json constCity', json.cities[1].name);
      // console.log('je suis json', myCities);
      // console.log('le typeof de json', typeof json.cities);
    }
  }
}
export default new Api();
