var Discord = require('discord.js');
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./stats.sqlite");

client.on('ready', () => {
});

client.on('message', msg => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (message.channel.type !== "dm") return; // All commands must be DM, or they won't work. This is to hide commands from other players.

    if (message.substring(0, 1) == '!') 
    {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1); // removes the '!'
		var subargs = args.split("-");
		args = (args.split ("-"))[0] // removes anything after and including '-'
		if(subargs.length() > 0)
		{
			var target = subargs[1];
		}

        switch(cmd) 
		{

			//ALL-PURPOSE COMMANDS

            // !ping
            case 'ping':
                message.reply('Pong!');
            break;

			// !test
            //case 'test':
                //bot.sendMessage(message.author, subargs[0]);
            //break;

			//!help
			case 'help':
				message.reply('Here is a list of available commands:');
				message.reply('!ping: DMs me (the bot), just to say hi. :)');
				message.reply('!getStats: gets all available info on your character.');
				message.reply('!getInventory: gets a page of your presents, with each page being 20 presents.');
				message.reply('		!getInventory-1: #001-020');
				message.reply('		!getInventory-2: #021-040');
				message.reply('		!getInventory-3: #041-060');
				message.reply('		!getInventory-4: #061-080');
				message.reply('		!getInventory-5: #081-100');
				message.reply('		!getInventory-6: #101-120');
				message.reply('		!getInventory-7: #121-125');
			break;

			// !getStats: gets SICKO stats, Influence/Focus, Skills, Monocoins, and Status
            case 'getStats':
				sql.get(`SELECT * FROM stattable WHERE userId ="${message.author.id}"`).then(row => 
				{
					if (!row)
					{
						message.reply('ERROR: This user has not been initialized!');
					}
					else
					{
						message.reply('Name: ${row.firstname} ${row.lastname}');
						message.reply('Talent: ${row.talent}');
						message.reply('Status: ${row.status}');
						message.reply('Monocoins: ${row.monocoins}');
						message.reply('Strength: ${row.savagery}');
						message.reply('Intellect: ${row.intellect}');
						message.reply('Cunning: ${row.cunning}');
						message.reply('Kindness: ${row.kills}');
						message.reply('Overall: ${row.overall}');
					}
				}).catch(() => 
				{
					console.error;
					sql.run("CREATE TABLE IF NOT EXISTS stattable (userID TEXT, firstname TEXT, lastname TEXT, talent TEXT, status TEXT, monocoins INTEGER, savagery INTEGER, intellect INTEGER, cunning INTEGER, kills INTEGER, overall INTEGER)").then(() => 
					{
						message.reply ('ERROR: This user has not been initialized!');
					});

				});
            break;

			// !getInventory: gets a list of the player's Presents
            case 'getInventory':
                bot.sendMessage(message.author, "PLACEHOLDER");
            break;

			// !getStudentInfo: gets a masterlist of students with basic info
            case 'getStudentInfo':
                bot.sendMessage(message.author, "PLACEHOLDER");
            break;


			//DAILY LIFE COMMANDS

			// !giveItem: gives a Present to someone, if they choose to accept it.
            case 'giveItem':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !FTE: approaches someone to start an FTE. 
			// This will activate an FTE, only if var itemSuccess is true, var playersApproached < 2, var approachedByPlayers < 2, and the player being approached is online.
            case 'FTE':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;


			//DEADLY LIFE COMMANDS

			// !attack: Attempts to use non-lethal force on a target. This will also alert the GM.
			// Requires target
            case 'attack':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !attemptMurder: Attempts to MURDER a target. This will also alert the GM.
			// Requires target
            case 'attemptMurder':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !investigate: investigates an item in the current room.
			// Requires target
            case 'investigate':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !investigateRoom: brings up a list of things to investigate based on your currently investigated room and your Intellect stat.
			// Requires target
            case 'investigateRoom':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !getTruthBullets: gets a list of all current Truth Bullets.
            case 'getTruthBullets':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;


			//TRIAL COMMANDS

			// !statement: submits a statement to the Non-Stop Debate queue, along with the amount of Influence bet.
			// subargs[1] is the Influence to bet
            case 'statement':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !counter: first asks how much Focus you would like to bet, then which statement you wish to counter from the current Non-Stop Debate, then asks which Truth Bullet you wish to use to counter it, and then attempts to counter the statement
            case 'counter':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !lieCounter: identical to !counter, but bets twice as much Focus and uses the opposite of the selected Truth Bullet.
            case 'lieCounter':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !consent: identical to !counter, but agrees with the current statement by adding additional evidence.
            case 'consent':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !accuse: first asks which target you would like to accuse, then activates Suspicion mode on them, replacing their current Influence with Nega Influence. This can only be done outside of Non-Stop Debate.
            case 'accuse':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !vote: votes a target as guilty. Only works during Voting Time.
			// Requires target
            case 'vote':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;




			//MONOKUMA-EXCLUSIVE COMMANDS

			//ALL-PURPOSE COMMANDS

			// !addStudent: adds a student to the roster. Get ready for a ton of initialization.
			// target is the Discord user
			// subargs[2] - subargs[3] is the student's name (first and last)
			// subargs[4] is the player's talent
			// subargs[5] - subargs[8] is the student's stats (savagery, intellect, cunning, kills)
			// subargs[9] is the player's fteID (for shard numbers)
            case 'addStudent':				
				if(message.member.roles.has(message.guild.roles.find(message.author.id, "Admin"))) 
				{
					sql.get('SELECT * FROM stattable WHERE userId ="${message.author.id}"').then(row => 
					{
						if (!row)
						{
							sql.run("INSERT INTO stattable VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, subargs[2], subargs[3], subargs[4], "ALIVE", 1, parseInt(subargs[5]), parseInt(subargs[6]), parseInt(subargs[7]), parseInt(subargs[8]), (parseInt(subargs[5]) + parseInt(subargs[6]) + parseInt(subargs[7]) + parseInt(subargs[8]))]);
						}
						else
						{
							message.reply('This user already exists!');
						}
					}).catch(() => 
					{
						console.error;
						message.reply('Table stattable created.');
						sql.run("CREATE TABLE IF NOT EXISTS stattable (userID TEXT, firstname TEXT, lastname TEXT, talent TEXT, status TEXT, monocoins INTEGER, savagery INTEGER, intellect INTEGER, cunning INTEGER, kills INTEGER, overall INTEGER)").then(() => 
						{
							sql.run("INSERT INTO stattable VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, subargs[2], subargs[3], subargs[4], "ALIVE", 1, parseInt(subargs[5]), parseInt(subargs[6]), parseInt(subargs[7]), parseInt(subargs[8]), (parseInt(subargs[5]) + parseInt(subargs[6]) + parseInt(subargs[7]) + parseInt(subargs[8]))]);
						});
					});

					sql.get('SELECT * FROM fteData WHERE userId ="${message.author.id}"').then(row => 
					{
						if (!row)
						{
							sql.run("INSERT INTO fteData VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, parseInt(subargs[9]), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
						}
						else
						{
							message.reply('This user already exists!')
						}
					}).catch(() =>
					{
						console.error;
						message.reply('Table fteData created.');
						sql.run("CREATE TABLE IF NOT EXISTS fteData (userID TEXT, fteID INTEGER, playersApproached INTEGER, approachedBy INTEGER, shards1 INTEGER, shards2 INTEGER, shards3 INTEGER, shards4 INTEGER, shards5 INTEGER, shards6 INTEGER, shards7 INTEGER, shards8 INTEGER, shards9 INTEGER, shards10 INTEGER, shards11 INTEGER, shards12 INTEGER, shards13 INTEGER, shards14 INTEGER, shards15 INTEGER, shard16 INTEGER)").then(() => 
						{
							sql.run("INSERT INTO fteData VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, parseInt(subargs[9]), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
						});
					});

					//I'm sorry in advance for this but SQL is annoying
					if (subargs[9] == 1)
					{
						sql.run ("UPDATE fteData SET shards1 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 2)
					{
						sql.run ("UPDATE fteData SET shards2 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 3)
					{
						sql.run ("UPDATE fteData SET shards3 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 4)
					{
						sql.run ("UPDATE fteData SET shards4 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 5)
					{
						sql.run ("UPDATE fteData SET shards5 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 6)
					{
						sql.run ("UPDATE fteData SET shards6 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 7)
					{
						sql.run ("UPDATE fteData SET shards7 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 8)
					{
						sql.run ("UPDATE fteData SET shards8 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 9)
					{
						sql.run ("UPDATE fteData SET shards9 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 10)
					{
						sql.run ("UPDATE fteData SET shards10 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 11)
					{
						sql.run ("UPDATE fteData SET shards11 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 12)
					{
						sql.run ("UPDATE fteData SET shards12 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 13)
					{
						sql.run ("UPDATE fteData SET shards13 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 14)
					{
						sql.run ("UPDATE fteData SET shards14 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 15)
					{
						sql.run ("UPDATE fteData SET shards15 = 6 WHERE userID = target");
					}
					else if (subargs[9] == 16)
					{
						sql.run ("UPDATE fteData SET shards16 = 6 WHERE userID = target");
					}
					
					sql.get('SELECT * FROM presents WHERE userId ="${message.author.id}"').then(row => 
					{
						if (!row)
						{
							sql.run("INSERT INTO presents VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
						}
						else
						{
							message.reply('This user already exists!')
						}
					}).catch(() => 
					{
						console.error;
						message.reply('Table presents created.');
						sql.run("CREATE TABLE IF NOT EXISTS presents (userID TEXT, p1 INTEGER, p2 INTEGER, p3 INTEGER, p4 INTEGER, p5 INTEGER, p6 INTEGER, p7 INTEGER, p8 INTEGER, p9 INTEGER, p10 INTEGER, p11 INTEGER, p12 INTEGER, p13 INTEGER, p14 INTEGER, p15 INTEGER, p16 INTEGER, p17 INTEGER, p18 INTEGER, p19 INTEGER, p20 INTEGER, p21 INTEGER, p22 INTEGER, p23 INTEGER, p24 INTEGER, p25 INTEGER, p26 INTEGER, p27 INTEGER, p28 INTEGER, p29 INTEGER, p30 INTEGER, p31 INTEGER, p32 INTEGER, p33 INTEGER, p34 INTEGER, p35 INTEGER, p36 INTEGER, p37 INTEGER, p38 INTEGER, p39 INTEGER, p40 INTEGER, p41 INTEGER, p42 INTEGER, p43 INTEGER, p44 INTEGER, p45 INTEGER, p46 INTEGER, p47 INTEGER, p48 INTEGER, p49 INTEGER, p50 INTEGER, p51 INTEGER, p52 INTEGER, p53 INTEGER, p54 INTEGER, p55 INTEGER, p56 INTEGER, p57 INTEGER, p58 INTEGER, p59 INTEGER, p60 INTEGER, p61 INTEGER, p62 INTEGER, p63 INTEGER, p64 INTEGER, p65 INTEGER, p66 INTEGER, p67 INTEGER, p68 INTEGER, p69 INTEGER, p70 INTEGER, p71 INTEGER, p72 INTEGER, p73 INTEGER, p74 INTEGER, p75 INTEGER, p76 INTEGER, p77 INTEGER, p78 INTEGER, p79 INTEGER, p80 INTEGER, p81 INTEGER, p82 INTEGER, p83 INTEGER, p84 INTEGER, p85 INTEGER, p86 INTEGER, p87 INTEGER, p88 INTEGER, p89 INTEGER, p90 INTEGER, p91 INTEGER, p92 INTEGER, p93 INTEGER, p94 INTEGER, p95 INTEGER, p96 INTEGER, p97 INTEGER, p98 INTEGER, p99 INTEGER, p100 INTEGER, p101 INTEGER, p102 INTEGER, ch0 INTEGER, ch1 INTEGER, ch2 INTEGER, ch3 INTEGER, ch4 INTEGER, ch5 INTEGER, ch6 INTEGER, uw1 INTEGER, uw2 INTEGER, uw3 INTEGER, uw4 INTEGER, uw5 INTEGER, uw6 INTEGER, uw7 INTEGER, uw8 INTEGER, uw9 INTEGER, uw10 INTEGER, uw11 INTEGER, uw12 INTEGER, uw13 INTEGER, uw14 INTEGER, uw15 INTEGER, uw16 INTEGER)").then(() => 
						{
							sql.run("INSERT INTO presents VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
						});
					});

					bot.reply("Student " + subargs[2] + " with userID " + target + " has been added.");
				}
				break;

			// !giveCoins: pays out Monocoins to a target
            case 'giveCoins':
                sql.run ("UPDATE stattable SET monocoins += subargs[2] WHERE name = target");
				
				bot.reply (subargs[2] + " coins have been given to " + target + ".");
            break;

			//DAILY LIFE COMMANDS

			// !morningAnnouncement: posts the morning announcement in the announcements channel.
            case 'morningAnnouncement':
                bot.sendMessage({
                    to: monokuma-announcements,
                    message: 'Pong!'
                });
            break;

			// !eveningAnnouncement: posts the evening announcement in the announcements channel.
            case 'eveningAnnouncement':
                bot.sendMessage({
                    to: monokuma-announcements,
                    message: 'Pong!'
                });
            break;


			//DEADLY LIFE COMMANDS

			// !bodyAnnouncement: posts the body discovery announcement in the announcements channel.
            case 'bodyAnnouncement':
                bot.sendMessage({
                    to: monokuma-announcements,
                    message: 'Pong!'
                });
            break;

			// !trialAnnouncement: posts the trial summons announcement in the announcements channel.
            case 'trialAnnouncement':
                bot.sendMessage({
                    to: monokuma-announcements,
                    message: 'Pong!'
                });
            break;


			//TRIAL COMMANDS

			// !alleviate: Alleviates Suspicion mode from a target.
			// Requires target
            case 'alleviate':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

			// !punishment: executes a target. This has a unique return based on the target.
			// Requires target
            case 'punishment':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
         }
});

client.login(process.env.TOKEN);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
