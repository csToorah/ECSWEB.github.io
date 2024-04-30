require('dotenv').config()
const {REST, Routes, ApplicationCommandOptionType, Options} = require('discord.js')

const commands = [
    {
        name: 'add-member',
        description: 'Adds member to website',
        options: [
            {
                name: 'portrait',
                description: 'Member Portrait',
                type: ApplicationCommandOptionType.Attachment,
                required: true,
            },
            {
                name: 'name',
                description: 'Member Name',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'major',
                description: 'Member Major',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'role',
                description: 'Member Role',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'email',
                description: 'Email',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'description',
                description: 'Description',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'links',
                description: 'Links',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    {
        name: 'add-project',
        description: 'Adds project to website',
        options: [
            {
                name: 'images',
                description: 'Project Images',
                type: ApplicationCommandOptionType.Attachment,
                required: true,
            },
            {
                name: 'name',
                description: 'Project Name',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'contributers',
                description: 'Project Contributers',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'description',
                description: 'Project Description',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'stats',
                description: 'Project Statistics',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    {
        name: 'add-event',
        description: 'Adds event to website',
        options: [
            {
                name: 'name',
                description: 'Event Name',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'location',
                description: 'Event Location',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'start-time',
                description: 'Event Start Time',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'end-time',
                description: 'Event End Time',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'date',
                description: 'Event Date',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'organizers',
                description: 'Event Organizers',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'description',
                description: 'Event Description',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
]

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () =>{
    try {

        console.log('Registering Slash commands')
        await rest.put(
            Routes.applicationGuildCommands(process.env.ARK_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log('Slash commands were registered successfully')
    } catch (error) {
        console.log(error)
    }
})();
