import React from 'react';

class Attendance extends React.Component {
    constructor(props) {
        // super is a parent class contructor, which defines 'this' keyword.
        super(props);

        // Create a JS object and store it in a React state. 
        this.state = {
            students : [
                {id:1, name : "Mike", check : true},
                {id:2, name : "Jane", check : false},
                {id:3, name : "Susan", check : true},
                {id:4, name : "Steve", check : true},
                {id:5, name : "Brad", check : false},
                {id:6, name : "Leo", check : true},
                {id:7, name : "John", check : false},
                {id:8, name : "Sam", check : false},
                {id:9, name : "Kate", check : true},
            ]
        };
    }
    
    // render method must be included in a class component
    render() {
        const   { students }  = this.state;
            
        return (
        // Array.prototype.map() expects a return value from arrow function
        // Nothing would be shown if the return command is not submitted
            <div>
                <h1>Class A-1</h1>
                <div>
                    <span>Name </span>                                  
                    <span>Check </span>                                  
                    <span>Attendance </span>                                  
                </div>
                <ol>
                    {students.map((student)=>{
                        return (
                        <div>
                            <li key={student.id}>
                                {student.name} <input type={'checkbox'}></input> {(student.check).toString()}
                            </li>
                        </div>
                        )
                    })}
                </ol>
            </div>
        );
    }
}

export default Attendance;