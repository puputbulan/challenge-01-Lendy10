// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
// Color List
const monicaFavorite = new Set();
monicaFavorite.add('Yellow');
monicaFavorite.add('Pink')
monicaFavorite.add('White')
monicaFavorite.add('Purple')


let wendyFavorite = new Set();
wendyFavorite.add('Blue');
wendyFavorite.add('Black');
wendyFavorite.add('Grey');

let monicaResto = new Set();
monicaResto.add('Bento');
monicaResto.add('Sushi');
monicaResto.add('Pancake');
monicaResto.add('Eggy');
monicaResto.add('Tempura');
monicaResto.add('Bento');
monicaResto.add('Eggy');
monicaResto.add('Padang');
monicaResto.add('Tteok');
monicaResto.add('Sushi');
monicaResto.add('Sushi');

let wendyResto = new Set();
wendyResto.add('Tempura');
wendyResto.add('Bento');
wendyResto.add('Sushi');
wendyResto.add('Pancake');
wendyResto.add('Padang');
wendyResto.add('Katsu');
wendyResto.add('Geprek');
wendyResto.add('Pancake');
wendyResto.add('Eggy');

// Start Test
const firstUser = {
  name: "Monica",
  gender: "female",
  age: "17",
  email: "monica@dingdong.com",
  favoriteColor: [...monicaFavorite],
  isHavePet: "Yes",
  education: [
    { name: "SD 01", city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" },
  ],
  favoriteRestaurant: [...monicaResto],
};
const secondUser = {
  name: "Wendy",
  gender: "male",
  age: "23",
  email: "wendy@dingdong.com",
  favoriteColor: [...wendyFavorite],
  isHavePet: "No",
  education: [
    { name: "SD 02", city: "Jakarta", graduate: "2010" },
    { name: "SMP 03", city: "Bogor", graduate: "2013" },
    { name: "SMA 01", city: "Surabaya", graduate: "2016" },
    { name: "Universitas Maju", city: "Tangerang" },
  ],
  favoriteRestaurant: [...wendyResto],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);
// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};