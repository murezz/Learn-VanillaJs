const namaMantan = ["komang", "teguh", "made"];

namaMantan.forEach(function (item, index, array) {
    console.log(item, index, array);
});

namaMantan.push("dewi"); //untuk menambahkan Object

console.log(namaMantan)

namaMantan.pop(); //menghapus object terkahir

console.log(namaMantan)

namaMantan.shift(); //menghapus object pertama

console.log(namaMantan);

