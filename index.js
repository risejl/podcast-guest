const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom;
let people = [];
let peopleHTMLList;

axios.get("https://lexfridman.com/podcast/")
  .then(function (response) {
    dom = new JSDOM(response["data"])
    peopleHTMLList = dom.window.document.querySelectorAll(".vid-person");
    for (let i = 0; i < peopleHTMLList.length; i++) {
      people.push(peopleHTMLList[i].textContent);
    } 
    console.log(people);
  })
  .catch(function (error) {
    console.err(error);
  });

function getGuest() {
  
}
