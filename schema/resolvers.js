const Netflix = require("../models/Netflix");

const resolvers={
    Query:{
        getAllMoviesAndShows: async () => await Netflix.find({}),
        getMoviesAndShowsByTitle: async (_, { title }) => await Netflix.findOne({ title }),
    },
    Mutation:{
        //createMovieOrShow
        async createMovieOrShow(_, { userInput }) {
            try {
                const existingDocument = await Netflix.findOne({ title: userInput.title });
                if (existingDocument) {
                    throw new Error('Movie or show already exists');
                }
                
                const createMovieOrShow = new Netflix(userInput);
                const created = await createMovieOrShow.save();
                return created; 
            } catch (error) {
                console.error(error);
                throw new Error("Failed to create movie or show");
            }
        },
        //deleteMovieShowByTitle
        async deleteMovieShowByTitle(_, { title }) {
            try {
                const deletedDocument = await Netflix.findOneAndDelete({ title });
                if (!deletedDocument) {
                    throw new Error('Movie or show not found');
                }

                return 'Movie or show deleted successfully';
            } catch (error) {
                console.error("Error deleting movie or show:", error);
                throw new Error(`Failed to delete: ${error.message}`);
            }
        },
        //updateMovieShow
        async updateMovieShow(_, { title, description, runtime, genres, imdb_score }) {
            try {
                const updateData = {};
        
                if (description !== undefined) updateData.description = description;
                if (runtime !== undefined) updateData.runtime = runtime;
                if (genres !== undefined) updateData.genres = genres;
                if (imdb_score !== undefined) updateData.imdb_score = imdb_score;
        
                const updatedDocument = await Netflix.findOneAndUpdate(
                    { title },
                    { $set: updateData },
                    { new: true } 
                );
        
                if (!updatedDocument) {
                    throw new Error('Movie or show not found');
                }
        
                return updatedDocument; 
            } catch (error) {
                console.error("Error updating movie or show:", error);
                throw new Error("Failed to update movie or show");
            }
        },
        
    },
};

module.exports={resolvers};
