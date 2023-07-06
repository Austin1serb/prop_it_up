// Here we create the Header Component that will receive props and we know we want to have a user
//     first and last name
import React from 'react';
    
const Header = (props) => {
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    return (
        <div>
            <h1>
                <p className='name'>{props.lastName}, {props.firstName}</p>
                <p>Age: {props.age}</p>
                <p>Haircolor: {props.hairColor}</p>
            </h1>
        </div>
    );
}
export default Header;