let database = [{
  name:"RM",
  born:"Sep 12, 1994",
  age:"23",
  picture:"img/bts-rm.png",
  bio:""
},{
  name:"Jin",
  born:"Dec 4, 1992",
  age:"25",
  picture:"img/bts-jin.png",
  bio:""
},{
  name:"Suga",
  born:"Mar 9, 1993",
  age:"25",
  picture:"img/bts-suga.png",
  bio:""
},{
  name:"J-Hope",
  born:"Feb 18, 1994",
  age:"24",
  picture:"img/bts-jhope.png",
  bio:""
},{
  name:"Jimin",
  born:"Oct 13, 1995",
  age:"22",
  picture:"img/bts-jm.png",
  bio:""
},{
  name:"V",
  born:"Dec 30, 1995",
  age:"22",
  picture:"img/bts-v.png",
  bio:""
},{
  name:"Jungkook",
  born:"Sep 1, 1997",
  age:"20",
  picture:"img/bts-jk.png",
  bio:""
}];

let searchBar = document.getElementById("search-bar");
let searchButton = document.getElementById("search-button");
let autoSuggestions = document.getElementById("auto-suggestions");
let display = document.getElementById("display");

searchBar.addEventListener("keypress", checkKey);
searchBar.addEventListener("click", processInput);
searchBar.addEventListener("input", getAutoSuggestions);


function checkKey(e) {
  let key = e.which || e.keyCode;
  if(key == 13) {
    //console.log(“You pressed enter!”);
    processInput();
  }
}

function processInput() {
  let cleanedInput = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML = '';
  autoSuggestions.style.display = 'none';
  let databaseRecord = getRecord(cleanedInput);

  if(databaseRecord != null) {
    displayRecord(databaseRecord);
  } else {
    displaySuggestions(getSuggestions(cleanedInput));
  }
}

function getRecord(cleanedInput) {
  for(let i = 0; i < database.length; i++){
    let cleanedRecordName = database[i].name.toLowerCase().trim();
    if (cleanedInput == cleanedRecordName) {
      return database[i];
    }
  }
  return null;
}

function displayRecord(databaseRecord) {
  let recordName = document.createElement("h2");
  recordName.innerHTML = databaseRecord.name;
  let recordPicture = document.createElement("img");
  recordPicture.src = databaseRecord.picture;
  let recordBorn = document.createElement("p");
  recordBorn.innerHTML = "<b>Born:</b> " + databaseRecord.born;
  let recordAge = document.createElement("p");
  recordAge.innerHTML = "<b>Age:</b> " + databaseRecord.age;
  let recordBio = document.createElement("p");

  display.appendChild(recordName);
  display.appendChild(recordPicture);
  display.appendChild(recordBorn);
  display.appendChild(recordAge);
  display.appendChild(recordBio);
}

function getAutoSuggestions(databaseRecord) {
  let cleanedInput = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML = '';
  for(let i = 0; i < database.length; i++){
    let cleanedRecordName = database[i].name.toLowerCase().trim();;
    if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0) {
      let matching = cleanedRecordName.substring(0, searchBar.value.length);
      let remaining = cleanedRecordName.substring(searchBar.value.length);
      let result = matching + "<b>" + remaining + "</b>";
      let button = document.createElement("button");
      button.innerHTML = result;
      button.style.display = "block";
      activateSuggestionButton(button, database[i]);
      autoSuggestions.appendChild(button);
    }
  }
  if (autoSuggestions.hasChildNodes()) {
    autoSuggestions.style.display = "block";
  } else {
    autoSuggestions.style.display = "none";
  }
}

function activateSuggestionButton(button, record) {
  button.addEventListener("click", function() {
    displayRecord(record);
    autoSuggestions.innerHTML = "";
    autoSuggestions.style.display = "none";
    searchBar.value = "";
  });
}

function getSuggestions(cleanedInput) {
  let suggestions = [];
  for (let i = 0; i < database.length; i++) {
    let cleanedRecordName = cleanedInput;
    if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0) {
      suggestions.push(database[i])
    }
    return suggestions;
  }
}

function displaySuggestions(suggestions) {
  display.innerHTML = "";
  let paragraph = document.createElement("p");
  if (suggestions.length > 0) {
    paragraph.innerHTML = "Did you mean:";
    display.appendChild(paragraph);
    for (var i = 0; i < suggestions.length; i++) {
      let button = document.createElement("button");
      button.innerHTML = suggestions[i].name;
      button.style.display = "block";
      button.className = "suggestion";
      activateSuggestionButton(button, suggestions[i]);
      display.appendChild(button);
    }
  } else {
    paragraph.innerHTML = "No results!";
    display.appendChild(paragraph);
  }
}
