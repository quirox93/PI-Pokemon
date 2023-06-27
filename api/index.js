//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { Type, conn } = require("./src/db.js");
const pokeApi = "https://pokeapi.co/api/v2/";
const axios = require("axios");

// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(async () => {
    //Preparar la tabla de Types
    const types = await Type.findAll();
    if (!types.length) {
      const { data } = await axios.get(pokeApi + "type");

      const mapTypes = data.results.map(({ name }) => {
        return { nombre: name };
      });
      await Type.bulkCreate(mapTypes);
      console.log("Types added.");
    }
  })
  .then(() => {
    server.listen(3001, () => {
      console.log("Server ready."); // eslint-disable-line no-console
    });
  });