const requireAuthentication = async(req, res, next) => {
    if (!req.isAuthenticated()) {
        res.sendStatus(401); 
    } else {
        next();
    }
}

exports.requireAuthentication = requireAuthentication;
