import Hike from '../models/hike';
import Mountain from '../models/mountain'
import Route from '../models/route'
import User from '../models/user'


// This eventually will be an API call that brings back a list 

// create an array of hike objects
export const HIKES = [
    new Hike(
        0,
        10001,
        '2022-04-06T10:50:50.667-06:00',
        805549,
        0,
        [4, 2, 3,],
        4,
        'hello Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in orci molestie, mollis orci sit amet, lacinia urna.',
        'yes',
        'Slow',
        'Sunny Forecast',
        '100'
    )
]

export const USER = [
    new User(
       0,
       'David',
       'smith',
       'Denver',
       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100'
    ),
    new User(
        1,
        'Alec',
        'Baldwin',
        'Boulder',
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200'
     ),
     new User(
        2,
        'Steve',
        'Austin',
        'Eerie',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200'
     ),
     new User(
        3,
        'Eric',
        'Thomas',
        'Eerie',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200'
     ),
     new User(
        4,
        'Lauren',
        'Johnston',
        'Eerie',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200'
     ),
]