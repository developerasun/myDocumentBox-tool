import { useState } from "react";
import * as React from 'react';
import { User } from './user'
import { UserProps } from "../propContainer";

export function LoginTest () {
    // isLogin type is set based on initial value, which is boolean here
    // you don't have to explicitly say useState type thanks to type inference
    const [user, setUser] = useState<UserProps | null>(null) 
    const handleLogin = () => setUser({
        name: "Jake", 
        email: "thisisjake@gmail.com",
        isLoggedIn: true
    })
    const handleLogout = () => setUser(null)
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {/* when state value by useState can be null, always have to add optioinal operator. 
        Use type assertion like below when you know the state won't be null. 
        const [user, setUser] = useState({} as UserProps)
        */}
        {user &&  <User isLoggedIn={user?.isLoggedIn} name={user?.name} email={user?.email}/>}
        {!user && <p>Please login first</p>}
    </div>
  );
}
