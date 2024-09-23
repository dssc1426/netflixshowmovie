This is basically my Programming assignment of Advanced database systems in Masters Degree.

The link to test the data with queries : https://netflixshowmovie-8a68f5aadc25.herokuapp.com/
You need to send GraphQL queries and mutations using tools like Apollo Studio GraphQL Playground, Postman,  or Insomnia to test the work.
I used NoddeJs to connect the mongodb on cloud

The CSV file (netflix.csv are Movie and Show on Netflix) is provided in this assignment with the column names including: 
age_certification
description
genres
id
imdb_score
production_countries
release_year
runtime
title
type

Database name: database
Collection name: netflixes

You should create the application using GraphQL APIs by Apollo Server for 5 main functions:
1.Create function: insert the new movies or shows.
2.Update function: update the movie and show information using title, and modifies only description, runtime, genres and imdb_score attributes).
3.Delete function: delete the movie or show document using title.
4.Read function (I): retrieve all the movie or show documents.
5. Read function (II): display the detail of the movie or show using title.
