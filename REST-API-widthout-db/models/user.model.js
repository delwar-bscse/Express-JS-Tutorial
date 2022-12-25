const {v4 : uuidv4} = require('uuid');
const users = [
    {
        id : uuidv4(),
        uname : "M D Hossain",
        email : "delwarbscse@gmail.com"
    },
    {
        id : uuidv4(),
        uname : "Ataullah Khan",
        email : "ataullah202@gmail.com"
    },
    {
        id : uuidv4(),
        uname : "Rumi Ahmed",
        email : "drumiahmed@gmail.com"
    }
]

module.exports = users;