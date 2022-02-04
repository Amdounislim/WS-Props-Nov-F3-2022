import React from 'react';
import UserCard from './UserCard';

const UsersList = (props) => {
    return <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {props.persons.map((el, i) => <UserCard user={el} key={i} />)}
    </div>;
};

export default UsersList;
