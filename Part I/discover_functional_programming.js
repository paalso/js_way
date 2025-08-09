// Older movies
// https://thejsway.net/chapter10/#older-movies

const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];

// TODO: Make an array of the titles of movies released before 2000
const moviesBefore2000 = movieList
  .filter(({year}) => year < 2000)
  .map(({title}) => title);
console.log(moviesBefore2000);


// Government forms
// https://thejsway.net/chapter10/#government-forms

const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
];

// TODO: compute the formsEndingWithCy array

// Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
const formsEndingWithCy = governmentForms
  .map(({name}) => name)
  .filter(item => item.endsWith('cy'));
console.log(formsEndingWithCy);

// Arrays sum
// https://thejsway.net/chapter10/#arrays-sum
const arrays = [[1, 4], [11], [3, 5, 7], 2, [[1, 2], 3]];
// const arrays = 5;

// Version 1
/*
const arraysSum = arrays => {
  if (typeof arrays == 'number')
    return arrays;
  return arrays.reduce(
    (acc, e) => acc + arraysSum(e), 0
  );
}

const arraysLength = arrays => {
  if (typeof arrays == 'number')
    return 1;
  return arrays.reduce(
    (acc, e) => acc + arraysLength(e), 0
  );
}
*/

// Version 2
const arraysReducer = (arrays, func) => {
  if (typeof arrays == 'number')
    return arrays;
  return arrays.reduce(
    (acc, e) => acc + func(e), 0
  );
}
const arraysSum = arrays => arraysReducer(arrays, e => e);
const arraysLength = arrays => arraysReducer(arrays, e => 1);

const arraysAverage = arrays => arraysSum(arrays) / arraysLength(arrays);
console.log(arraysAverage([[1,2,3], 4, [[5]], [6,[7,8,[9]]], 10]));


// Student results
// https://thejsway.net/chapter10/#student-results
const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

const average = array =>
  array.length === 0 ? null : array.reduce((acc, e) => acc + e) / array.length;

const getFemaleStudentsResults = data => data
  .filter(({sex}) => sex === 'f')
  .reduce((acc, {name, grades}) => [...acc, {name, avgGrade: average(grades)}], []);


const femaleStudentsResults = getFemaleStudentsResults(students);
console.log(femaleStudentsResults);
