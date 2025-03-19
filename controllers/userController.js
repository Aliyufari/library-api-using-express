let users = [
    {id: 1, name: 'John Doe', email: 'jdoe@email.com', password: '', gender: 'Male'},
    {id: 2, name: 'John Smith', email: 'jsmith@email.com', password: '', gender: 'Male'},
    {id: 3, name: 'Jane Doe', email: 'jane@email.com', password: '', gender: 'Female'}
];

/*
*   Get all users 
*   Method GET
*   Private
*/
const index = (req, res) => {
    res.status(200)
        .json({
            status: true,
            message: 'Users fetched successfully',
            users: users
        });
}

/*
*   Create and store user
*   Method POST
*   Private
*/
const store = (req, res) => {
    const { name, email, password, gender } = req.body;

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
            user: user
        });
}

/*
*   Show user
*   Method GET
*   Private
*/
const show = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id)) ;
    if (!user) {
        res.status(404);
        throw new Error('User Not Found');
    }

    return res.json({
        status: true,
        message: 'User fetched successfully',
        user: user
    })
}

/*
*   Update user
*   Method PUT
*   Private
*/
const update = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email, password, gender } = req.body;

    const user = users.find(user => user.id === userId) ;
    if (!user) {
        res.status(404);
        throw new Error('User Not Found');
    }

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

    let updatedUser = null;
    users = users.map(user => {
        if(user.id === userId){
           updatedUser = { ...user, name, email, password, gender };
           return updatedUser;
        }

        return user;
    });

    return res.json({
        status: true,
        message: 'User updated successfully',
        user: updatedUser
    });
}

/*
*   Delete user
*   Method DELETE
*   Private
*/
const destroy = (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(user => user.id === userId) ;
    if (!user) {
        res.status(404);
        throw new Error('User Not Found');
    }

    users = users.filter(user => user.id !== userId);

    return res.json({
        status: true,
        message: 'User deleted successfully'
    });
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
};