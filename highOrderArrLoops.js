//                                //               //         FOR OF loop           //                    //

// const greetings = "yeahh buddyy !!";
// for (const greets of greetings) {
//   //   console.log(greets);
//   if (greets === " ") {
//     continue;
//   }
//   console.log(`the each char of greetings are ${greets}`);
// }

// const map = new Map();
// map.set("IN", "INDIA");
// map.set("EN", "ENGLAND");
// map.set("FR", "FRANCE");
// map.set("IN", "INDIA");

// console.log(map);

// for (const key of map) {
//   console.log(key);
// }

// for (const [key, value] of map) {
//   console.log(key, value);
// }

// for (const [key, value] of map) {
//   console.log(`${key} stands for  ${value}`);
// }

const myObj = {
  game1: "NFS",
  game2: "DHOOM-3",
}; //                                    // THIS FOR-OF LOOP DON'T WORK IN OBJECTS BCZ THEY ARE NOT ITERABLE
for (const [key, value] in myObj) {
  //   console.log(key, ":-", value);
}

/////////////////////////////////////                   FOR-IN LOOP               ////////////////////////////////////////////////////

// const myObject = {
//   js: "javaScript",
//   cpp: "c++",
//   rb: "ruby",
//   swift: "swift by baba",
// };
// for (const key in myObject) {
//   console.log(key);
// }

// for (const key in myObject) {
//   console.log(myObject[key]);
// }

// for (const key in myObject) {
//   console.log(`${key} is the shortcut for ${myObject[key]}`);
// }

//
//

// const programming = ["js", "rb", "py", "java", "cpp"];
// for (const key in programming) {
//   console.log(key);
// }

// const coding = ["javaScript", "ruby", "python", "cpp"];
// coding.forEach(function (val) {
//   console.log(val);
// });

//
//

// const letCode = [
//   {
//     langName: "javaScript",
//     langFileType: "js",
//   },
//   {
//     langName: "ruby",
//     langFileType: "rb",
//   },
//   {
//     langName: "java",
//     langFileType: "java",
//   },
//   {
//     langName: "python",
//     langFileType: "py",
//   },
// ];
// letCode.forEach((item) => {
//     console.log(item.langName);
//     console.log(item.langFileType);
// //   console.log(
// //     `the language name is${item.langName} and its saved in the .${item.langFileType} format extension`
// //   );
// });
