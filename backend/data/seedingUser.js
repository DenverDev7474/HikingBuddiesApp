/* mySeedScript.js */

// require the necessary libraries
const { faker } = require('@faker-js/faker');
require('dotenv').config({ path: __dirname + '/../variables.env' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

const User = mongoose.model('User', {
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    firstName: {
        type: String,
    },  
    lastName: {
        type: String,
    },
    city: {
        type: String,
    },
    profilePicUrl: {
        type: String,
    }
});



async function seedDB() {

    try {

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.

        const users = [];
        for (let i = 0; i < 20; i++) {
            const username = faker.internet.userName();
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            const city = faker.address.city();
            const profilePicUrl = faker.image.avatar();
            const email = faker.internet.email();
            const user = new User({
                username,
                firstName,
                lastName,
                city,
                profilePicUrl,
                email,
            })
            users.push(user);
        }
        await User.insertMany(users);
        console.log("Database seeded! :)");
        process.exit();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();