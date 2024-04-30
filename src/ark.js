const {Client, IntentsBitField, MessageFlags, Guild} = require('discord.js');
require('dotenv').config()

const ark = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],

})

class Member{
    constructor(portrait, name, email, major, role, description, links){
        this.portrait = portrait;
        this.name = name;
        this.email = email;
        this.major = major;
        this.role = role;
        this.description = description;
        this.links = links;
    }
}

class Project{
    constructor(images, name, contributers, description, stats){
        this.images = images;
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
        this.date = date;
        this.organizers = organizers;
        this.description = description;
    }
}

const membersContainer = {
    members: [],
};
const projectsContainer = {
    projects: [],
};
const eventsContainer = {
    events: [],
};

ark.on('ready', (c) =>{
    console.log(`${c.user.tag} is online`);
})

function check(name, array){
    array.some(item => item.name === name);
}
function add(element, array){
    if(!check(element.name, array)){
        array.push(element);
        return `${element.name} added`;
    }else{
        return `${element.name} unable to add`;
    }
}
function remove(name, array){
    for(let i = 0; i < array.length; i++){
        if(array[i].name === name){
            array.splice(i, 1);
            return `${name} removed`;
        }
    }
    return `${name} was not removed`
}

ark.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand()) return;
    switch(interaction.commandName){
        case 'add-member':
            interaction.reply(add(new Member(
                interaction.options.get('portrait').value,
                interaction.options.get('name').value, 
                interaction.options.get('email').value, 
                interaction.options.get('major').value,
                interaction.options.get('role').value,
                interaction.options.get('description').value,
                interaction.options.get('links').value),
                membersContainer.members));
            break;
        case 'add-project':
            interaction.reply(add(new Project(
                interaction.options.get('images').value,
                interaction.options.get('name').value,
                interaction.options.get('contriubuters').value,
                interaction.options.get('description').value,
                interaction.options.get('stats').value,
            ),
            projectsContainer.projects))
            break;
        case 'add-event':
            interaction.reply(add(new Event(
                interaction.options.get('name').value,
                interaction.options.get('location').value,
                interaction.options.get('start-time').value,
                interaction.options.get('end-time').value,
                interaction.options.get('date').value,
                interaction.options.get('organizers').value,
                interaction.options.get('description').value,
            ),
            eventsContainer.events))
            break;
        case 'remove-member':
            interaction.reply(remove(
                interaction.options.get('name').value, 
                membersContainer.members));
        case 'remove-project':
            interaction.reply(remove(
                interaction.options.name('name').value,
                projectsContainer.projects));
        case 'remove-event':
            interaction.reply(remove(
                interaction.options.get('name').value,
                eventsContainer.events
            ))
        default:
            interaction.reply('Your command was invalid');
    }
})

ark.login(process.env.TOKEN);