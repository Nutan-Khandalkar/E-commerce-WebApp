const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function handlePostSignup(req, res) {
    
    const { username, email, password } = req.body; 
    if(!username || !email || !password){
        return  res.status(400).json({ message: 'Username, email, and password are required' });
    }   
    

    try {

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        const handlepassword = await bcrypt.hash(password, 10);

        const newUser = new User({
             username, 
             email, 
             password: handlepassword 
            });

        await newUser.save();

        res.status(201).json({success:true,
             message: 'User registered successfully',
             userId: newUser._id 
            });
    } catch (error) {

        console.error('Error during user signup:', error);
        res.status(500).json({success:false ,
             message: 'Internal server error'
             });
    }
}

async function handlePostLogin(req, res) {
    // Login logic here
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({success:false, message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }   
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }   

        const token = jwt.sign(
            { id: user._id , email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN},
        );

        res.status(200).json({
            success:true,
            message: 'Login successful',
            token,
            user:{ id: user._id, email: user.email,name: user.username}
});
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {
    handlePostSignup,
    handlePostLogin,
};