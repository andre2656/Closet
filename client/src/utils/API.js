import axios from "axios";

// The getPins method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
    getPins: function (query) {
        return axios.get("/api/pins", { params: { q: query } });
    }
};