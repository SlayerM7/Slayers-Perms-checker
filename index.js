const { Client } = require('discord.js');
const client = new Client();
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Ask the user something and execute a function when answered
const {
    red, 
    green,
    cyan,
    white,
    blue,
    magenta
} = require('chalk')
console.clear();
console.log(magenta(`

    
                                     ╔═╗┬ ┬┌─┐┌─┐┬┌─┌─┐┬─┐
                                     ║  ├─┤├┤ │  ├┴┐├┤ ├┬┘
                                     ╚═╝┴ ┴└─┘└─┘┴ ┴└─┘┴└─


`))
rl.question(`

                                      Enter account token: `, (answer) => {
  // TODO: Log the answer in a database



client.on('ready', () => {
    console.clear()
    console.log(magenta(`
    

    ╔═╗┬  ┌─┐┬ ┬┌─┐┬─┐┌─┐  ┌─┐┌─┐┬─┐┌┬┐┌─┐  ┌─┐┬ ┬┌─┐┌─┐┬┌─┌─┐┬─┐
    ╚═╗│  ├─┤└┬┘├┤ ├┬┘└─┐  ├─┘├┤ ├┬┘│││└─┐  │  ├─┤├┤ │  ├┴┐├┤ ├┬┘
    ╚═╝┴─┘┴ ┴ ┴ └─┘┴└─└─┘  ┴  └─┘┴└─┴ ┴└─┘  └─┘┴ ┴└─┘└─┘┴ ┴└─┘┴└─    


               Logged in as ${client.user.tag}

    `))

    client.guilds.forEach(g => {
        if  (g.me.hasPermission("BAN_MEMBERS")) {
            console.log(white(`[+] `) + red(`I have ban perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
        if (g.me.hasPermission("KICK_MEMBERS")) {
            console.log(white(`[+] `) + red(`I have kick perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
        setTimeout(() => {
        if (g.me.hasPermission("MANAGE_ROLES")) {
            console.log(white(`[+] `) + green(`I have manage role perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
    }, 1 *1000)
    setTimeout(() => {
        if (g.me.hasPermission("ADMINISTRATOR")) {
            console.log(white(`[+] `) + cyan(`I have admin perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
    }, 2 * 1000)
    setTimeout(() => {
        if (g.me.hasPermission("MANAGE_CHANNELS")) {
            console.log(white(`[+] `) + magenta(`I have manage channel perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
    }, 3 * 1000)
        setTimeout(() => {
        if (g.me.hasPermission("MANAGE_GUILD")) {
            console.log(white(`[+] `) + cyan(`I have manage server perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
    }, 2 * 1000)
        setTimeout(() => {
        if (g.me.hasPermission("MANAGE_WEBHOOKS")) {
            console.log(white(`[+] `) + green(`I have manage webhook perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
    },1  * 1000);
    setTimeout(() => {
        if (g.me.hasPermission("MENTION_EVERYONE")) {
            console.log(white(`[+] `) + magenta(`I have @every1 perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
    }, 3 * 1000)
    setTimeout(() => {
        if (g.me.hasPermission("SEND_TTS_MESSAGES")) {
            console.log(white(`[+] `) + blue(`I have send tts perms in `) + white(`${g.name} [+] `) + red(`${g.memberCount}`))
        }
    }, 4 * 1000)
})



})

client.login(answer).catch(() => console.log(red(`[ERROR] Wrong token`)))
rl.close();
});