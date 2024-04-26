class Member{
    constructor(portrait, name, role, major, email, description, links){
        this.portrait = portrait;
        this.name = name;
        this.role = role;
        this.major = major;
        this.email = email;
        this.description = description;
        this.links = links;
    }

}
class Project{
    constructor(imgs, name, contributers, description, stats){
        this.imgs = imgs;
        this.name = name;
        this.contributers = contributers;
        this.description = description;
        this.stats = stats;
    }
}

class Event{
    constructor(name, location, startTime, endTime, date, organizers, description){
        this.name = name;
        this.location = location;
        this.startTime = startTime;
        this.endTime = endTime;
        this.date = new Date(2024, 2, 26);
        this.organizers = organizers;
        this.description = description;
    }
}

class Announcement{
    constructor(announceName, announceDate, announceTime, announceMessage){
        this.announceName = announceName;
        this.announceDate = announceDate;
        this.announceTime = announceTime;
        this.announceMessage = announceMessage;
    }
}

// Announcements Section-----------------------------------------------------------------------------------------------------------
const aboutUsContainer = document.querySelector('.aboutUs');
let aboutDescrip = document.createElement('p');
aboutDescrip.textContent = `We are MPC's Engineering and Computer Science Club! We dedicate ourselves to the goal of STEM 
                            education at MPC. Along with working on projects during the school year, we also serve as an 
                            excellent liaison between STEM students and fruitful internship opportunities.`;
aboutUsContainer.appendChild(aboutDescrip);
// Announcements Section-----------------------------------------------------------------------------------------------------------

// Announcements Section-----------------------------------------------------------------------------------------------------------
const announcementContainer = document.querySelector('.announcement-container');

let announcement = document.createElement('div');
let announceName = document.createElement('h3');
let announceDate = document.createElement('h5');
let announceTime = document.createElement('h5');
let announceMessage = document.createElement('p');

announceName.textContent = newAnnouncement.announceName;
announceDate.textContent = newAnnouncement.announceDate;
announceTime.textContent = newAnnouncement.announceTime;
announceMessage.textContent = newAnnouncement.announceMessage;


announcement.classList.add('announcement');
announceName.classList.add('announce-name');
announceDate.classList.add('announce-date');
announceTime.classList.add('announce-time');
announceMessage.classList.add('announce-message');

announcement.append(announceName, announceDate, announceTime, announceMessage);
announcementContainer.appendChild(announcement);
// Announcements Section-----------------------------------------------------------------------------------------------------------

// Events Section-----------------------------------------------------------------------------------------------------------
const eventContainer = document.querySelector('.events-container');

let nextEvent = document.createElement('div');
let NEName = document.createElement('h3');
let NELocation = document.createElement('h4');
let NETime = document.createElement('h4');
let NEDate = document.createElement('h4');

NEName.textContent = 'STEM Presentation';
NELocation.textContent = 'Monterey Peninsula College';
NETime.textContent = '12:00 - 2:00pm';
NEDate.textContent = '04/13/2024';

NEName.classList.add('event-name');
NELocation.classList.add('event-location');
NETime.classList.add('event-time');
NEDate.classList.add('event-date');

nextEvent.append(NEName, NELocation, NETime, NEDate);
eventContainer.appendChild(nextEvent);
// Events Section-----------------------------------------------------------------------------------------------------------

// Next Meeting Section-----------------------------------------------------------------------------------------------------------
const nextMeetingContainer = document.querySelector('.next-meeting-container');

let meeting = document.createElement('div');

let meetingDay = document.createElement('h4');
let meetingLocation = document.createElement('h4');
let meetingTime = document.createElement('h4');

meetingDay.textContent = 'Day: Monday';
meetingLocation.textContent = 'Location: BMC~207';
meetingTime.textContent = 'Time: 12:00 - 2:00pm'

meeting.append(meetingDay, meetingLocation, meetingTime);

nextMeetingContainer.appendChild(meeting);
// Next Meeting Section-----------------------------------------------------------------------------------------------------------

// Officers Section-----------------------------------------------------------------------------------------------------------
const officersContainer = document.querySelector('.officers-container');

let officer = document.createElement('div');
let oName = document.createElement('h2');
let oRole = document.createElement('h4');
let oInfo = document.createElement('h4');
let oPortrait = document.createElement('img');

officer.classList.add('officer')
oName.classList.add('officer-name');
oRole.classList.add('officer-role');
oInfo.classList.add('officer-info');
oPortrait.classList.add('officer-portrait')

oName.textContent = 'Andrew Prince';
oRole.textContent = 'Role: President';
oInfo.textContent = 'Email: aprince@mpc.edu';
oPortrait.src = '';

officer.append(oName, oRole, oInfo, oPortrait);
officersContainer.appendChild(officer);
// Officers Section-----------------------------------------------------------------------------------------------------------

// Latest Project Section-----------------------------------------------------------------------------------------------------------
const latestProjectContainer = document.querySelector('.latest-project-container');

let latestProject = document.createElement('div');
let latestProjectName = document.createElement('h1');
let latestProjectDescrip = document.createElement('p');
let latestProjectImg = document.createElement('img');

latestProjectName.textContent = newProject.name;
latestProjectDescrip.textContent = newProject.description;
latestProjectImg.src = newProject.imgs[0];

latestProject.classList.add('latest-project');
latestProjectName.classList.add('latest-project-name');
latestProjectDescrip.classList.add('latest-project-descrip');
latestProjectImg.classList.add('latest-project-img')
latestProject.append(latestProjectName, latestProjectDescrip, latestProjectImg);
latestProjectContainer.appendChild(latestProject);

// Latest Project Section-----------------------------------------------------------------------------------------------------------

// Join us Section-----------------------------------------------------------------------------------------------------------

document.getElementById('yesBtn').addEventListener('change',  function() {
    if (this.checked) {
        document.getElementById('discordUsername').style.visibility = 'visible';
    }
});

document.getElementById('noBtn').addEventListener('change', function(){
    if(this.checked){
        document.getElementById('discordUsername').style.visibility = 'hidden';
    }
});

// Join us Section-----------------------------------------------------------------------------------------------------------
// Calendar Section--------------------------------------------------------------------------------------------------------
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' , 'December'];
const days = [31, 28,  31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let displayMonth = document.getElementById('displayMonth');
let displayYear = document.getElementById('displayYear');
let date = new Date();
let yearIndex = date.getFullYear();
let monthIndex = date.getMonth();

document.querySelector('.m-back').addEventListener('click', ()=>{
    monthIndex = monthIndex == 0? 11: monthIndex - 1;
    displayMonth.textContent = months[monthIndex];
    displayMonthDays(monthIndex);
})
document.querySelector('.m-forward').addEventListener('click', ()=>{
    monthIndex = monthIndex == 11? 0: monthIndex + 1;
    displayMonth.textContent = months[monthIndex]
    displayMonthDays(monthIndex);
})

document.querySelector('.y-back').addEventListener('click', () =>{
    yearIndex -= 1;
    displayYear.textContent = yearIndex;
    days[1] = isLeap(yearIndex);
    displayMonthDays(monthIndex);
})

document.querySelector('.y-forward').addEventListener('click', () =>{
    yearIndex += 1;
    displayYear.textContent = yearIndex;
    days[1] = isLeap(yearIndex);
    displayMonthDays(monthIndex);
})

function isLeap(yearIndex){
    return yearIndex%4 == 0? 29: 28;
}
function displayMonthDays(monthIndex){
    monthContainer.replaceChildren();
    for(let i = 0; i < days[monthIndex]; i++){
        let day = document.createElement('div');
        day.textContent = i + 1;
        day.classList.add('c-day');
        if(i+1 == date.getDate() && monthIndex == date.getMonth() && yearIndex == date.getFullYear()){
            day.style.backgroundColor = 'lightgrey';
        }
        monthContainer.appendChild(day);
    }
}


const monthContainer = document.querySelector('.month');
monthContainer.replaceChildren();
displayMonth.textContent = months[monthIndex];
displayYear.textContent = yearIndex;
if(yearIndex % 4 == 0){
    days[1] = 29;
}else{
    days[1] = 28;
}
for(let i = 0; i < days[monthIndex]; i++){
    let day = document.createElement('div');
    day.textContent = i + 1;
    day.classList.add('c-day');
    if(i+1 == new Date().getDate()){
        day.style.backgroundColor = 'lightgrey';
        day.style.borderRadius = '50%'
    }
    monthContainer.appendChild(day);
}

    // Calendar EventsSection--------------------------------------------------------------------------------------------------------
    const eventsContainer = document.querySelector('.events-section');

    let event = document.createElement('div');
    let eName = document.createElement('h3');
    let eLocation = document.createElement('h4');
    let eTime = document.createElement('h4');
    let eOrganizers = document.createElement('ul');
    let eDescription = document.createElement('p');


    eName.classList.add('e-name');
    eLocation.classList.add('e-location');
    eTime.classList.add('e-time');
    eOrganizers.classList.add('e-organizers');
    eDescription.classList.add('e-description');

    event.classList.add('e-event');
    eName.textContent = newEvent.name;
    eLocation.textContent = `Location: ${newEvent.location}`;
    eTime.textContent = `Time: ${newEvent.startTime} - ${newEvent.endTime - 12}PM`;
    organizersTitle = document.createElement('li');
    organizersTitle.textContent = 'Organizers: ';
    eOrganizers.appendChild(organizersTitle)
    newEvent.organizers.forEach(organizer => {
        let listItem = document.createElement('li');
        listItem.textContent = organizer;
        listItem.classList.add('e-organizer')
        eOrganizers.appendChild(listItem);
    });
    eDescription.textContent = newEvent.description;

    event.append(eName, eLocation, eTime, eOrganizers, eDescription);
    eventsContainer.appendChild(event);
    // Calendar Events Section--------------------------------------------------------------------------------------------------------



// Calendar Section--------------------------------------------------------------------------------------------------------

// Project Section--------------------------------------------------------------------------------------------------------


const projectsContainer = document.querySelector('.projects-container');

let project = document.createElement('div');
let projectImgs = document.createElement('ul');
let contribBtn = document.createElement('button');
let infoBtn = document.createElement('button');
let contribContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let infoStats = document.createElement('ul');
let infoDescrip = document.createElement('p');

project.classList.add('project');
projectImgs.classList.add('project-imgs-container');
contribBtn.classList.add('project-contribBtn');
infoBtn.classList.add('project-infoBtn');
contribContainer.classList.add('contributers-container');
infoContainer.classList.add('project-info-container');
infoStats.classList.add('info-stats');
infoDescrip.classList.add('info-description');

contribContainer.style.display ='none';
infoBtn.style.backgroundColor = 'white';

newProject.imgs.forEach(imgLink => {
    let listItem = document.createElement('li');
    let img = document.createElement('img');
    img.src = imgLink;
    listItem.appendChild(img);
    listItem.classList.add('project-imgs')
    projectImgs.appendChild(listItem);
});
contribBtn.textContent = 'Contributers';
infoBtn.textContent = 'Info';
newProject.contributers.forEach(person => {
    let contributer = document.createElement('p')
    contributer.textContent = person;
    contributer.classList.add('contributer');
    contribContainer.appendChild(contributer);
});
newProject.stats.forEach(projectStat => {
    let stat = document.createElement('li');
    stat.textContent = projectStat;
    infoStats.appendChild(stat);
});
infoDescrip.textContent = newProject.description;

infoContainer.append(infoStats, infoDescrip);
project.append(projectImgs, contribBtn, infoBtn, contribContainer, infoContainer);

projectsContainer.appendChild(project);

contribBtn.addEventListener('click', ()=>{
    contribBtn.style.backgroundColor = 'white';
    infoContainer.style.display = 'none';
    contribContainer.style.display = '';
    infoBtn.style.backgroundColor = 'lightgrey';
})

infoBtn.addEventListener('click', ()=>{
    infoBtn.style.backgroundColor = 'white';
    contribContainer.style.display = 'none';
    infoContainer.style.display = '';
    contribBtn.style.backgroundColor = 'lightgrey'
})
// Project Section-----------------------------------------------------------------------------------------------------------

// Members Section-----------------------------------------------------------------------------------------------------------


function toCard(member){
    let card = document.createElement('div');
    
    let cardInfo = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardDescription = document.createElement('div');
    let cardLinks = document.createElement('div');

    card.classList.add('member');
    cardInfo.classList.add('m-info');
    cardImg.classList.add('m-img');
    cardDescription.classList.add('m-description');
    cardLinks.classList.add('m-links');
    cardImg.src = member.portrait;
    
    let infoName = document.createElement('h3');
    let infoRole = document.createElement('h3');
    let infoMajor = document.createElement('h3');
    let infoEmail = document.createElement('h3');
    let infoDescrip = document.createElement('p');
    let infoLinks = document.createElement('ul');

    infoName.textContent = `Name: ${member.name}`;
    infoRole.textContent = `Role: ${member.role}`;
    infoMajor.textContent = `Major: ${member.major}`;
    infoEmail.textContent = `Email: ${member.email}`;
    infoDescrip.textContent = member.description;

    cardInfo.appendChild(infoName);
    cardInfo.appendChild(infoRole);
    cardInfo.appendChild(infoMajor);
    cardInfo.appendChild(infoEmail);
    cardDescription.appendChild(infoDescrip);

    member.links.forEach(link => {
        let listItem = document.createElement('li');
        listItem.textContent = link;
        infoLinks.appendChild(listItem);
    });
    cardLinks.appendChild(infoLinks);
    card.append(cardImg, cardInfo, cardDescription, cardLinks);

    return card;
}

document.getElementById('members-section').appendChild(memberCard);
// Members Section-----------------------------------------------------------------------------------------------------------
