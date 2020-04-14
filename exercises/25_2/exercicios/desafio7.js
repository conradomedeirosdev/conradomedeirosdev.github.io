db.movies.updateMany(
  { imdbRating: { $gte: 7} },
  { $addToSet: { category: "90's" } }
);
