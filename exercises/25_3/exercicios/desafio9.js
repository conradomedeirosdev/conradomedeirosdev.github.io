db.movies.find(
  { category: {$all: ['action']},
  ratings: { $elemMatch: { $gt: 103 } }}, 
  { title: 1, rating: 1, category: 1}
)
