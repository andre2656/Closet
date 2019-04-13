/**
 * This is middleware that validates the users information.
 * 
 * It will sit between Express routes and your route handler 
 * 
 * For more info on Express middleware:
 *  https://expressjs.com/en/guide/writing-middleware.html
 */
function authMiddleware(req, res, next) {
    
    console.log(' \n request \n')
    console.log(req.cookies)
    try {
        
        const userId = req.cookies.user_id;
        const authToken = req.cookies.auth_token;

        if (!userId || !authToken) {
            throw new Error("Invalid auth cookie");
        }

        // Security, make sure that our cookies match what is in the session
        if (userId == req.session.user_id && authToken == req.session.auth_token) {
            console.log("Got logged in");

            // Middleware function is done, let this go on to the next handler
            next();
        }

    } catch (err) {
        console.log("authMiddleware issue - User not logged in: ", err);

        // 401 - Unauthorized
        res.status(401).json({ error: err.message });
    }
}

module.exports = authMiddleware;