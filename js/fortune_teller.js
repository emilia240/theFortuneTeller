//fortune teller exercise

/* 
task
• Store the following into variables: number of children, partner's name, geographic location, job title.
• Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/

/* 
let noKids = 0;
let partner = 'Pennywise';
let geographicLocation = 'a Legoland castle';
let jobTitle = 'gravedigger';

console.log(`You will be a ${jobTitle} living in ${geographicLocation}, and married to ${partner} with ${noKids} kids.`); */

let noKids = [0];
let partner = ['Pennywise', 'Itt Addams', 'Thomas Shelby', 'Victoria Pedretti'];
let geographicLocation = ['a Legoland castle', 'the Hill House', 'the Stanley Hotel', 'New Orleans'];
let jobTitle = ['gravedigger', 'professional mourner', 'professional sleeper', 'clown'];


function pickRandomValues(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let randomNoKids = pickRandomValues(noKids);
let randomPartner = pickRandomValues(partner);
let randomGeographicLocation = pickRandomValues(geographicLocation);
let randomJobTitle = pickRandomValues(jobTitle);

console.log(`You will be a ${randomJobTitle} living in ${randomGeographicLocation}, and married to ${randomPartner} with ${randomNoKids} kids.`);



//button and message

const fortuneButton = document.getElementById('fortune_button');
const fortuneMessage = document.getElementById('fortune_message');

// an event listener
fortuneButton.addEventListener('click', () => {
    let randomNoKids = pickRandomValues(noKids);
    let randomPartner = pickRandomValues(partner);
    let randomGeographicLocation = pickRandomValues(geographicLocation);
    let randomJobTitle = pickRandomValues(jobTitle);
    fortuneMessage.textContent = `You will be a ${randomJobTitle} living in ${randomGeographicLocation}, and married to ${randomPartner} with ${randomNoKids} kids.`;

});



