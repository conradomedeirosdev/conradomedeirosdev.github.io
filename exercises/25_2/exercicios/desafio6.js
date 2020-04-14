db.movies.update(
  { title: "Batman" },
  { $addToSet: { category: "action" } }
);
