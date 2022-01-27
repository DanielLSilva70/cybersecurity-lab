const bcrypt = require('bcryptjs')

const users = []


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          const correctPw = bcrypt.compareSync(password, users[i].password)
          if(correctPw) {
            let userToReturn = { ...users[i].hash};
            delete userToReturn.hash;
            res.status(200).send(userToReturn);
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log("Registering User");
        const { username, email, firstName, lastName, password } = req.body;
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        const newUser = {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: hash,
        };
        //console.log(req.body);
        users.push(newUser);
        let userToReturn = {...newUser}
        delete userToReturn.password;
        hashPasswords.push(hash);
        res.status(200).send(newUser);
        console.log(users);

    }
}