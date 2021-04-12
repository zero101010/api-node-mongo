const jwt = require('jsonwebtoken');
require("dotenv-safe").config();
const bcrypt = require('bcryptjs');
class Authenticate {
    verifyJWT(req, res, next){
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
          if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          
          // se tudo estiver ok, salva no request para uso posterior
          req.userId = decoded.id;
          next();
        });
    }
    login(req, res){
        // Como não tenho usuário deixei salvo o hash aqui fixo para somente fazer um login, caso tivessemos um banco, buscariamos o hash e o user do banco
        const hash = "$2a$10$gIMWOE1an7EGG1KIPdCra.VVMQ4hvf2ePaaxA7bvpK./5snn1mmry"
        //esse teste abaixo deve ser feito no seu banco de dados
        if(req.body.user === 'igor' &&  bcrypt.compareSync(req.body.password, hash)){
          //auth ok
          const id = 1; 
          //esse id viria do banco de dados caso tivessemos um usuário cadastrado
          const token = jwt.sign({ id }, process.env.SECRET);
          return res.json({ auth: true, token: token });
        }
        
        res.status(500).json({message: 'Login inválido!'});
    }
  }
  
  module.exports = new Authenticate();