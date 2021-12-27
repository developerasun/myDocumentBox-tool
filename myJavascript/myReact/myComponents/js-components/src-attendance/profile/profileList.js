import React from 'react'; 
import UserProfile from './profile';
import images from '../img/index';

class UserProfileList extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            users: [
                {id:1, name:"jake", image:images.a, message:"hello world"},
                {id:2, name:"smith", image:images.b, message:"goodbye world"},
                {id:3, name:"elly", image:images.c, message:"wow docker"},
                {id:4, name:"wendy", image:images.d, message:"what is react"},
                {id:5, name:"brian", image:images.e, message:"I am cute"},
                {id:6, name:"tom", image:images.f, message:"not so much"},
            ],
        }
    }

    render() { 
        const {users} = this.state;
        return (
            <div>
                {users.map((user)=>{
                    return <UserProfile user={user}/>
                })}
            </div>
        );
    }
}

export default UserProfileList;