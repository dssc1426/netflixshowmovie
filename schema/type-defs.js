const {gql} = require("apollo-server");

const typeDefs = gql `
     type Netflix{
        age_certification: String 
        description: String
        genres: [String]
        id: String
        imdb_score: String 
        production_countries: [String]
        release_year: String
        runtime: String
        title: String
        type: String
     }
     type Query{
        getAllMoviesAndShows: [Netflix!]
        getMoviesAndShowsByTitle(title: String!): Netflix
        
     }
     input MovieInput{
        age_certification: String 
        description: String
        genres: [String]
        id: String
        imdb_score: String 
        production_countries: [String]
        release_year: String
        runtime: String
        title: String
        type: String
     }
     type Mutation{
        createMovieOrShow(userInput: MovieInput): Netflix!
        updateMovieShow(title: String!, description: String, runtime: String, genres: [String], imdb_score: String): Netflix!
        deleteMovieShowByTitle(title: String!): String!
     }
`;

module.exports={typeDefs};
