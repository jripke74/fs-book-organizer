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

function sortByYear(book1, book2) {
  let sortResult = book1.releaseYear - book2.releaseYear;

  if (sortResult > 0) {
    return 1;
  } else if (sortResult == 0) {
    return 0;
  } else {
    return -1;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);