"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Script running...");
const myMultiply = (value1, value2) => {
    return value1 * value2;
};
console.log(myMultiply(10, 20));
let userData = {
    name: "solomon",
    Age: 50
};
console.log(userData);
let myRealAge = 20;
let myRealAge2 = "20";
console.log(typeof myRealAge);
console.log(typeof myRealAge2);
const Scientist = {
    name1: "solomon",
    Age: 50
};
const { name1, Age } = Scientist;
console.log("name1 is", name1);
console.log("The Age is", Age);
const Talk2Animalsz = (Animal) => {
    return `The Animal is ${Animal.name} and Age is ${Animal.age} and is of type ${Animal.animalType}`;
};
const Animal1 = {
    name: "Cow",
    age: 100,
    animalType: "Mammal",
};
console.log(Talk2Animalsz(Animal1));
const usersDetails = (User) => {
    return `The Students Details:
  name: ${User.name},
  faculty: ${User.faculty},
  regNo: ${User.regNo},
  age: ${User.age}`;
};
const OnyangosDetails = {
    name: "Onyanggo",
    faculty: "IT",
    regNo: 22222,
    age: 78
};
console.log(usersDetails(OnyangosDetails));
const Ngombe = {
    name: "Gao",
    animalType: "mammal",
    age: 50
};
console.log(Talk2Animalsz(Ngombe));
const Talk2Animalsz2 = (Animal) => {
    return `The Animal is ${Animal.name} and Age is ${Animal.age} and is of type ${Animal.animalType}`;
};
console.log(Talk2Animalsz(Ngombe));
console.log("please Print something here");
const rectangle = {
    width: 800,
    height: 600,
};
// using imported types
const TryingMyTypes = (rec) => {
    return rec.height * rec.width;
};
console.log(TryingMyTypes(rectangle));
// Arrays
console.log("--------------------Arrays----------------------------");
let mylist = [
    "Nagato",
    "Minato",
    "Kushna",
    "NAruto",
    "sasuke"
];
let mylist2 = [
    "Nagato",
    "Minato",
    "Kushna",
    "NAruto",
    "sasuke"
];
console.log();
console.log(mylist);
console.log(mylist2);
let selectedDiscography = [
    { title: "Naruto", author: "susuke", year: 2006 },
    { title: "Demon-Slayer", author: "Tanjiro", year: 2024 },
    { title: "JJK", author: "Sukuna", year: 2024 },
    { title: "Kaiju_No_9", author: "kaiju", year: 2025 },
];
console.log(selectedDiscography);
selectedDiscography.forEach(element => {
    console.log(element.author);
});
console.log();
let album = ["solomon", 100, "sthance"];
console.log(album);
let album2 = ["solomon", 100, "sthance", "cjhjc", "Boruto", "shikdae", "sarada"];
console.log(album2);
console.log();
let AlbumWithArtist = [
    {
        title: "Tokyo revengers",
        author: "mickey",
        year: 2014
    },
    10000000
];
console.log(AlbumWithArtist);
const formats = new Set();
// formats.add(8)
console.log(formats);
function getAlbumFormats(album, ...formats) {
    return `${album.title} is available in the following formats: ${formats.join(",")}
  )}`;
}
let miraformatAlbum = getAlbumFormats({ author: "Radiohead", title: "OK Computer", year: 1997 }, "CD", "LP", "Cassette");
console.log(miraformatAlbum);
// map over Items
const mapOverItems = (items, map) => {
    return items.map(map);
};
const ArrayOfItems = mapOverItems(["2", "3", "4", "5", "6", "7", "8", "9"], (item) => {
    return parseInt(item);
});
console.log(ArrayOfItems);
console.log();