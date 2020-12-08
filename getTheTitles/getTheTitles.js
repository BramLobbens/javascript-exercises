const getTheTitles = function (books) {
  return books.filter((book) => book.title.length > 0).map((book) => book.title);
};

module.exports = getTheTitles;
