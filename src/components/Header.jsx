// Here we create the Header Component that will receive props and we know we want to have a user
//     first and last name
import React, {useState} from 'react';

const Header = (props) => {
    const [clicks, setClicks] = useState(0)


    const buttonClick = () => {

        setClicks(clicks+ 1)
    }


    return (
        <div>
            <h1>
                <p className='name'>{props.lastName}, {props.firstName}</p>
                <p>Age: {props.age + clicks}</p>
                <p>Haircolor: {props.hairColor}</p>
                <button onClick={buttonClick} >Birthday for {props.lastName}, {props.firstName} </button>
            </h1>
        </div>
    );
}
export default Header;