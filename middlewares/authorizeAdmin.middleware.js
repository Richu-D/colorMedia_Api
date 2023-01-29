const jwt = require("jsonwebtoken");

const authorizeAdmin = async (req, res, next) => {

  try {
    let token = req.header("Authorization")
    if(!token) return res.status(400).json({ message: "Token is not available" });
    
    token = token.split(" ")[1]
    if(!token) return res.status(417).json({ message: "Invalid Token" });
    
    jwt.verify(token, process.env.TOKEN_SECRET, (err,data) => {
      if (err) return res.status(401).json({ message: "Invalid Authentification" });
      if(data.admin){
        next();
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = authorizeAdmin;

