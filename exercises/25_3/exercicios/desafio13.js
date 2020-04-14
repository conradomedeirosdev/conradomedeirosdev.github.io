db.movies.updateOne(
  { title: "Godzilla" },
  { $push: { description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity." } },
  { upsert: true }
);