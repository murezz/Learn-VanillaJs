const person = {
  firstName: "kimi",
  lastName: "hime",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 50,
  height: 172,
  weightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100;
  },
  needDiet: function () {
    const weightIdeal = this.weightIdeal();
    if (weightIdeal - 5 > this.weight)
      return (
        "you need more protei, need more " + (weightIdeal - this.weight) + "kg"
      );
    else if (weightIdeal + 5 < this.weight) return " You need a mayo diet";
    return "you are in a good shape";
  },
};

console.log(person.fullName());
console.log(person.weightIdeal());
console.log(person.needDiet());



// const countries = {
//   ID: {
//     provinsi: ["Bali", "Jawa Tengah", "Jawa Timur"],
//     City: ["Singaraja", "gianyar", "negare", "badung"],
//   },
//   MY: {}
// };

// console.log(countries.ID);


