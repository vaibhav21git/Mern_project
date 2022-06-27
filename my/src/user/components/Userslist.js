import React from 'react'

import './Userlist.css'
import Useritem from './Useritem'
import Card from '../../shared/components/UIElements/Card'

const Userslist = props => {
    if (props.items.length === 0) {
        return (<div className='center'>
            <Card>
            <h2>NO USERS FOUND</h2>
            </Card>
        </div>);
    }

    return (<ul className='users-list'>
        {props.items.map(user => (
            <Useritem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places} 
                />
        ))}
    </ul>
);
}

export default Userslist