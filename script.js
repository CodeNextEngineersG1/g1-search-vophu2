let database = [{
  name:"RM",
  birthday:"Sep 12, 1994",
  age:"23",
  picture:,
  bio:,
},{
  name:"Jin",
  birthday:"Dec 4, 1992",
  age:"25",
  picture:,
  bio:,
},{
  name:"Suga",
  birthday:"Mar 9, 1993",
  age:"25",
  picture:,
  bio:,
},{
  name:"J-Hope",
  birthday:"Feb 18, 1994",
  age:"24",
  picture:,
  bio:,
},{
  name:"Jimin",
  birthday:"Oct 13, 1995",
  age:"22",
  picture:,
  bio:,
},{
  name:"V",
  birthday:"Dec 30, 1995",
  age:"22",
  picture:,
  bio:,
},{
  name:"Jungkook",
  birthday:"Sep 1, 1997",
  age:"20",
  picture:,
  bio:,
}];

let searchBar = document.getElementById("search-bar");
let searchButton = document.getElementById("search-button");
let autoSuggestions = document.getElementById("auto-suggestions");
let display = document.getElementById("display");

searchBar.addEventListener("keypress", checkKey);
searchBar.addEventListener("click", processInput);


function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key == 13) {
    //console.log(“You pressed enter!”);
    processInput();
  }
}

function processInput() {
  let cleanedInput = searchBar.value.toLowerCase().trim();
  "" = autoSuggestions.innerHTML;
  //ADD MORE LATER
}

function getRecord(cleanedInput) {
  for(let i = 0; i < database.length; i++){
    var cleanedRecordName = database[i].name.toLowerCase().trim();
    if (cleanedInput == cleanedRecordName) {
      return database[i];
    }
  }
  return null;
}
