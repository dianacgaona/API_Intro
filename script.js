let dogObj = {
  status: "success",
  message: {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
    appenzeller: [],
    basenji: [],
    beagle: [],
    bluetick: [],
    borzoi: [],
    bouvier: [],
    boxer: [],
    brabancon: [],
    briard: [],
    bulldog: ["boston", "french"],
    bullterrier: ["staffordshire"],
    cairn: [],
    cattledog: ["australian"],
    chihuahua: [],
    chow: [],
    clumber: [],
    cockapoo: [],
    collie: ["border"],
    coonhound: [],
    corgi: ["cardigan"],
    cotondetulear: [],
    dachshund: [],
    dalmatian: [],
    dane: ["great"],
    deerhound: ["scottish"],
    dhole: [],
    dingo: [],
    doberman: [],
    elkhound: ["norwegian"],
    entlebucher: [],
    eskimo: [],
    frise: ["bichon"],
    germanshepherd: [],
    greyhound: ["italian"],
    groenendael: [],
    hound: ["afghan", "basset", "blood", "english", "ibizan", "walker"],
    husky: [],
    keeshond: [],
    kelpie: [],
    komondor: [],
    kuvasz: [],
    labrador: [],
    leonberg: [],
    lhasa: [],
    malamute: [],
    malinois: [],
    maltese: [],
    mastiff: ["bull", "tibetan"],
    mexicanhairless: [],
    mix: [],
    mountain: ["bernese", "swiss"],
    newfoundland: [],
    otterhound: [],
    papillon: [],
    pekinese: [],
    pembroke: [],
    pinscher: ["miniature"],
    pointer: ["german", "germanlonghair"],
    pomeranian: [],
    poodle: ["miniature", "standard", "toy"],
    pug: [],
    puggle: [],
    pyrenees: [],
    redbone: [],
    retriever: ["chesapeake", "curly", "flatcoated", "golden"],
    ridgeback: ["rhodesian"],
    rottweiler: [],
    saluki: [],
    samoyed: [],
    schipperke: [],
    schnauzer: ["giant", "miniature"],
    setter: ["english", "gordon", "irish"],
    sheepdog: ["english", "shetland"],
    shiba: [],
    shihtzu: [],
    spaniel: [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh"
    ],
    springer: ["english"],
    stbernard: [],
    terrier: [
      "american",
      "australian",
      "bedlington",
      "border",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "westhighland",
      "wheaten",
      "yorkshire"
    ],
    vizsla: [],
    weimaraner: [],
    whippet: [],
    wolfhound: ["irish"]
  }
};

let newArr = [];
let breedList = Object.keys(dogObj.message);

for (let i = 0; i < breedList.length; i++) {
  let subArr = dogObj.message[breedList[i]];
  if (dogObj.message[breedList[i]].length === 0) {
    let capDog = breedList[i].charAt(0).toUpperCase() + breedList[i].slice(1);
    newArr.push(capDog);
  } else {
    subArr.forEach(subDog => {
      let capSubDog =
        breedList[i].charAt(0).toUpperCase() + breedList[i].slice(1);
      let capValDog = subDog.charAt(0).toUpperCase() + subDog.slice(1);
      newArr.push(capValDog + " " + capSubDog);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("mybutton");
  let thep = document.createElement("p");

  button.addEventListener("click", event => {
    event.preventDefault();

    let randomDog = Math.floor(Math.random() * 132);
    thep.innerText = newArr[randomDog];
    document.body.appendChild(thep);
    document.getElementById.button.innerText = "Another One!";
  });
});
