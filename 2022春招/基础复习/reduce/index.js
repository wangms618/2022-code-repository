var wizards = [{
    name: 'Harry Potter',
    house: 'Gryfindor'
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff'
  },
  {
    name: 'Tonks',
    house: 'Hufflepuff'
  },
  {
    name: 'Ronald Weasley',
    house: 'Gryfindor'
  },
  {
    name: 'Hermione Granger',
    house: 'Gryfindor'
  }
]
var hufflepuff = wizards.reduce(function (newArr, wizard) {
  if (wizard.house === 'Hufflepuff') {
    newArr.push(wizard.name);
  }
  return newArr;
}, []);
console.log(hufflepuff);