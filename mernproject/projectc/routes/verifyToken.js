const jwt = require("jsonwebtoken");

 const verifyToken = (req, res, next) => {
     const authHeader = req.Headers.Token;
     console.log(authHeader.split(" ")[1]);
     if (authHeader) {
         const token = authHeader.split(" ")[1];
         jwt.verify(token, process.env.JWT_SEC, (err, user) => {
             if (err) res.status(403).json("Token is not valid!");
             req.user = user;
             next()
         });
     } else {
         return res.status(401).json("You are not authenticated!");
     }
 };
 
 const verifyTokenAndAuthorization = (req, res, next) => {
     verifyToken(req, res, () => {
         if (req.user.id === req.params.id || req.user.isAdmin ||req.user.isDeveloper) {
             next();
         } else {
             res.status(403).json("You are not alowed to do that!");
         }
     });
 };
 const verifyTokenAndDeveloper = (req, res, next) => {
     verifyToken(req, res, () => {
         if (req.user.isDeveloper) {
             console.log("hello babe")
             next();
         } else {
             res.status(403).json("You are not alowed to do that!");
         }
     });
 
    }
 const verifyTokenAndAdmin = (req, res, next) => {
     verifyToken(req, res, () => {
         if (req.user.isAdmin) {
             next();
         } else {
             res.status(403).json("You are not alowed to do that!");
         }
     });
 };
 
module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
    verifyTokenAndDeveloper,

 };