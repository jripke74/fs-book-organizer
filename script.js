// Build a Book Organizer
// Objective: Fulfill the user stories below and get all the tests
// to pass to complete the lab.

// User Stories:

// 1. You should have an array of objects named books where each object
// in the array should have a string title, another string authorName,
// and a number releaseYear.
// 2. Your books array should have a minimum of three objects.

const books = [
  {
    title: "Here",
    authorName: "Helrew Yeahu",
    releaseYear: 2020,
  },
  {
    title: "No Me",
    authorName: "John Stort",
    releaseYear: 2022,
  },
  {
    title: "Yes!",
    authorName: "Otoria James",
    releaseYear: 2021,
  },
];

// 3. You should have a callback function named sortByYear that accepts two
// books as parameter for sorting the array.
// 4. The sortByYear function should return -1 if the releaseYear of the first 
// book is smaller than that of the second book.
// 5. The sortByYear function should return 1 if the releaseYear of the first 
// book is bigger than that of the second book.
// 6. The sortByYear function should return 0 if both releaseYear values are equal.

function sortByYear(books1, book2) {
  let sortResult = book1.releaseYear - book2.releaseYear;

  if (sortResult > 0) {
    return 1;
  } else if (sortResult == 0) {
    return 0;
  } else {
    return -1;
  }
}

// 7. You should filter out books written after a certain year such as 
// 1950 from the books array and save the filtered array in a new array 
// named filteredBooks.
