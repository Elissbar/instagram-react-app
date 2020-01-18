import React from 'react';
import User from './User';
import Palette from './Palette';
import { ContextName } from '../App';


const Profile = () => {
    return (
        <div className="container profile">
            <ContextName.Consumer>
                {username => (
                    <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2oHmkEONrhfLQV5XvFaLGzEv9SRW4RNMbG9xaIx707FPHajVI"
                        alt="man"
                        name={username} 
                    />
                )}
            </ContextName.Consumer>
            {/* <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2oHmkEONrhfLQV5XvFaLGzEv9SRW4RNMbG9xaIx707FPHajVI"
                alt="man"
                name={username}/> */}
            <Palette />
        </div>
    )
}

export default Profile;