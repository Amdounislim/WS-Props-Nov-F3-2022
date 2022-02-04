import React from 'react';
import propTypes from 'prop-types';

const User = ({ name, age, email, display, children }) => {
    return <div>
        {/* {console.log(props)} */}
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h3>{age}</h3>
        <button onClick={display}>Click me</button>
        {children}
    </div>;
};

User.defaultProps = {
    name: "Foulen",
    email: "foulen@gmail.com",
    age: "my age",
    children: <p>Attention !!</p>
}

User.propTypes = {
    name: propTypes.string,
    email: propTypes.string,
    age: propTypes.number,
    children: propTypes.node.isRequired
}


export default User;
