const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});
//
const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit ({
  name: "Mango",
  rating: 7,
  review: "Not too bad but John's favorite."
})

mango.save();

// const fruit = new Fruit ({
//   rating: 10,
//   review: "Manderines are nice oranges."
// })
//
// fruit.save();

// const pineapple = new Fruit ({
//   name: "Pineapple",
//   rating: 9,
//   review: "Dam good."
// })
//
// pineapple.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});
//
const Person = mongoose.model("Person", personSchema);

// const person = new Person ({
//   name: "Patrick",
//   age: 28
// });
//
// person.save();

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });
//
// person.save();



// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 5,
//   review: "OK tasting."
// })
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 8,
//   review: "Good tasting, sour."
// })
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 10,
//   review: "Best tasting."
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful saved al lthe fruits.");
//   }
// });

// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//
//     for (let i = 0; i < fruits.length; i++) {
//       console.log(fruits[i].name)
//     }
//
//   }
// });

// Fruit.updateOne(
//   {_id: "623fc31abdf18fd82911be1c"},
//   {name: "Manderine Orange"},
//   function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated document.");
//     }
//   }
// );

// Fruit.deleteOne(
//   {_id: "623f8bbbe275bc65245d31bb"},
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Fruit successfully deleted.");
//     }
//   }
// );

// function fruitName(fruits) {
//    console.log("Hi")
//  }

// Person.deleteMany(
//   {name: "Patrick"},
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("All files have been deleted successfully.");
//     }
//   }
// );

Person.updateOne(
  {name: "John"},
  {favoriteFruit: mango},
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Update successful.");
    }
  }
)
