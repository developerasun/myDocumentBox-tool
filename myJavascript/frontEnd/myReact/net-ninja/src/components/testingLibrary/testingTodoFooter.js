function TestingTodoFooter( {incompleTasks} ) {
    return ( 
    <p>{incompleTasks} {incompleTasks===1 ? "task" : "tasks left" }</p>    
     );
}

export default TestingTodoFooter;