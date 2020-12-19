const nomor = 1;

function pilihBuah(nomor) {
  switch (nomor) {
    case 1:
      return "salak";
    case 2:
      return "Jeruk";
    case 3:
      return "Durian";
    case 4:
      return "Mangga";

    default:
      return "semangka";
  }
}

console.log(pilihBuah());