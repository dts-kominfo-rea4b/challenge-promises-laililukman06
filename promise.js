const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  return new Promise(async(resolve) => {
    let jumlahEmosiFilm = 0;

    const dataTheaterIXX = await promiseTheaterIXX();
    dataTheaterIXX.forEach((film) => {
      if (film.hasil === emosi) jumlahEmosiFilm++;
    });

    const dataTheaterVGC = await promiseTheaterVGC();
    dataTheaterVGC.forEach((film)=>{
      if (film.hasil === emosi) jumlahEmosiFilm++;
    });

    resolve(jumlahEmosiFilm);
  })

};

module.exports = {
  promiseOutput,
};
