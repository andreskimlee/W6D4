
class DOMNodeCollection { // Equivalent of JQuery Object
  constructor(array) { // Array of HTML Elements
    this.nodeArray = array;  // Instance variable representing array
  }

  html(str) { // Optionally receives a string as a parameter
    if (typeof str === 'string') { //If it receives argument, it becomes innerHMTL
      this.nodeArray.forEach(ele => ele.innerHTML = str)
    } else {
      return this.nodeArray[0].innerHTML; 
    }
  }

  empty() {
    this.html(""); 
  }

  // Accept either a:
  // 1) jQuery-lite wrapped collection, 
  // 2) an HTML element, 
  // 3)or a string. 
  // Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection. 
  append(arg) {
    debugger 
    switch (typeof arg) {
      case 'string':
        this.nodeArray.forEach( (ele) => ele.innerHTML += arg);
        break;
      case 'object': //if else statement dom node or html) 
        if (arg instanceof DOMNodeCollection) {
          this.nodeArray.forEach( node => {
            arg.nodeArray.forEach( (ele) => node.innerHTML += ele.outerHTML);
          })
        } else if (arg instanceof HTMLElement) {
          this.nodeArray.forEach(node => (node.innerHTML += arg.outerHTML));
        }
        break;
    }

  }

  attr(style, value) { //if else to include getter 
    if (!value) {
      arr = [];
       this.nodeArray.forEach(ele => arr.push(ele.className));
       return arr;
    } else {
       this.nodeArray.forEach( (ele) => ele.setAttribute(style, value));
    }
    
  } 

}



module.exports = DOMNodeCollection;