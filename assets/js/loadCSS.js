/*  Example of usage, for the home page, using app.js:
        loadCSS(button.dataset.id); 
*/

var filesAdded = '';

// To load CSS file
function loadCSS(fileName) { 
    if(filesAdded.indexOf(fileName) !== -1)
        return;
  
    var head = document.getElementsByTagName('head')[0];
      
    // Creating link element
    var style = document.createElement('link'); 
    style.href = '/assets/styles/' + fileName + '.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
      
    // Adding the name of the file to keep record
    filesAdded += fileName;
}