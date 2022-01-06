const target = document.querySelector("#target");
console.log(target.getBoundingClientRect()); 
console.log(target.clientHeight, target.clientWidth); 
console.log(target.offsetHeight, target.offsetWidth); 
console.log(target.scrollHeight, target.scrollWidth); 

// offsetParent
// clientWidth/clientHeight : showing size content ~ padding (content actually being shown)
// offsetWidth, offsetHeight : getting the element's whole size, excluding margin
// scrollWidth, scrollHeight : actual content size regardless of current display

// getBoundingClientRect vs element.offsetWidth/height 
// when transform applied, getBoundingClientRect returns rendering 
// width and height while offsetWidth not.

// getBoundingClientRect is useful to locate where the element is
// but in Internet Explorer, there might be some errors to use, thus 
// needs cross-browsing management like below code example
// code reference : https://ohgyun.com/562 (KOR)
// var getBoundingClientRect = function (el) {
//     var rect = el.getBoundingClientRect();

//     if (typeof rect.width === 'undefined') {
//         return {
//             top: rect.top,
//             bottom: rect.bottom,
//             left: rect.left,
//             right: rect.right,
//             width: rect.right - rect.left,
//             height: rect.bottom - rect.top
//         };
//     }

//     return rect;
// };