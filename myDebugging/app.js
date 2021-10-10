function submitName(event) {
    event.preventDefault(); 
    
    // Grabbing a text value in input tag from the form (note the last element 'value')
    const name = document.querySelector(".nameInput").value; 
    const hover_name_property = document.querySelector(".nameInput");

    // Debugging in Javascript :
    // 1) console.log() - (when program is small and not complicated)
    // 2) debugger;  - pause code execution it belongs to so that a developer can validate value
    // 3) sources/debugger tap in chrome/firefox/safari => deprecated(lastly checked 2021.10)

    // Debugging comparison : backend, front end
    // backend : VSC + breakpoint in lines
    // frontend : VSC + debugger (or console.log) + developer tools 

    debugger; // in a chrome developer tool, it can move to a next/previous debugger(breakpoint as well)
    // console.log(name); 
    // console.log(typeof(name));

    // Split a string in to sub-strings and put them on a list. 
    // Returns the array. 
    const nameSplit = name.split("");
    const listReversed = nameSplit.reverse();
    debugger;
    const listJoined = listReversed.join("");
    const nameReversed = listJoined; 

    document.querySelector(".reversedName").innerHTML = nameReversed;

    // Logic flow in the above function 
    // Take a name input
    // Split the name
    // Reverse it
    // Join it 
    // Save it and show it
}