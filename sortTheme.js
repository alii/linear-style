const theme = require('./theme.json');
const fs = require("fs");

const orderedTheme = Object.keys(theme).sort().reduce(
    (obj, key) => { 
      obj[key] = theme[key]; 
      return obj;
    }, 
    {}
  );
  
function writeTheme(themes){
  fs.writeFile('./theme.json', JSON.stringify(themes), (error) => {
     if (error) throw error;
   });
}

writeTheme(orderedTheme)
