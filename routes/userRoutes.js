const express = require("express");
const userRoute = express.Router();

let users = [
    {id: 1, name: 'John Doe', email: 'jdoe@email.com', password: '', gender: 'Male'},
    {id: 2, name: 'John Smith', email: 'jsmith@email.com', password: '', gender: 'Male'},
    {id: 3, name: 'Jane Doe', email: 'jane@email.com', password: '', gender: 'Female'}
];

userRoute.get('/', (req, res) => {
    res.status(200)
        .json({
            status: true,
            message: 'Users fetched successfully',
            users: users,
        });
});

userRoute.post('/', (req, res) => {
   
    const {name, email, password, gender} = req.body;

    if (!name || name.trim().length == 0) {
        res.status(400);
        throw new Error('Name is required');
    }

    if (!email || email.trim().length == 0) {
        res.status(400);
        throw new Error('Email is required');
    }

    if (!password || password.trim().length == 0) {
        res.status(400);
        throw new Error('Password is required');
    }

    if (!gender || gender.trim().length == 0) {
        res.status(400);
        throw new Error('Gender is required');
    }
    
    let user = {
        id: users.length + 1, 
        name: name, 
        email: email, 
        password: password, 
        gender: gender
    };

    users = [...users, user];

    res.status(201)
        .json({
            status: true,
            message: 'Users created successfully',
            user: user,
        });
});

userRoute.get('/:id', (req, res) => {
    const user = users.find(req.body.id);
    if (!user) {
        res.status(404);
        throw new Error('User Not Found');
    }

    return res.json({
        status: true,
        message: 'User fetched successfully',
        user: user
    })
});

userRoute.put('/:id', (req, res) => {

});

module.exports = userRoute;