import React from 'react';

import Userslist from '../components/Userslist';

const Users  = () =>
{
    const USERS = [
        {
        id: 'ul' ,
        name : 'Max' ,
        image :  'https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg', 
        places: 3}
    ];

    return <Userslist items = {USERS}/>;
};

export default Users;