const DOMNodeCollection = require("./dom_node_collection");

// window.$l = function(arg) {
//   let nodeList = window.querySelectorAll(arg);
//   let nodeArr = Array.from(nodeList);
//   // return nodeArr; //????
//   return new DOMNodeCollection(nodeArr);

// };

 // Is this same as DOMContentLoaded?


 window.$l = function(arg) {
   let nodeElement;
   if (arg instanceof HTMLElement ) {
      nodeElement = [arg];
       const abc = new DOMNodeCollection(nodeElement);
       return abc 
   } else if (typeof arg === "string" ) { 
     
      let nodeList = document.querySelectorAll(arg);
       
      let nodeArr = Array.from(nodeList);
      const abc = new DOMNodeCollection(nodeArr);
      return abc 
   } 
     
   };


