const {model, Schema}= require("mongoose");

const NetflixSchema = new Schema(
    {
        age_certification: String, 
        description: String,
        genres: [String],
        id: String,
        imdb_score: String,
        production_countries: [String],
        release_year: String,
        runtime: String,
        title: String,
        type: String,
    }
);

module.exports = model("Netflix", NetflixSchema);
