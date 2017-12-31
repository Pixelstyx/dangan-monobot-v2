var Discord = require('discord.js');
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./stats.sqlite");

client.on('ready', () => {
});

client.on('message', (message) => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (message.channel.type !== "dm") return; // All commands must be DM, or they won't work. This is to hide commands from other players.
	if (message.author.id == "391245054846566400") return;

    if (message.content.startsWith ("!")) 
    {
        var args = message.content;
       

        args = args.slice(1); // removes the '!'
		var subargs = args.split("-");

		if(subargs.length > 0)
		{
			var target = subargs[1];
		}

        switch(subargs[0]) 
		{

			//ALL-PURPOSE COMMANDS

            // !ping
            case 'ping':
                message.reply('Pong!');
            break;

			// !test
            case 'test':
                message.reply((subargs[0] + ' ' + subargs[1] + ' ' + subargs[2]));
            break;

			//!help
			case 'help':
				message.reply('Here is a list of available commands:');
				message.reply('!ping: DMs me (the bot), just to say hi. :)');
				message.reply('!getStats: gets all available info on your character.');
				message.reply('!getInventory-(number): gets a page of your presents, with each page being 20 presents.');
				message.reply(' -!getInventory-1: #001-020');
				message.reply(' -!getInventory-2: #021-040');
				message.reply(' -!getInventory-3: #041-060');
				message.reply('	-!getInventory-4: #061-080');
				message.reply('	-!getInventory-5: #081-100');
				message.reply('	-!getInventory-6: #101-120');
				message.reply('	-!getInventory-7: #121-125');
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
						message.reply(('Name: ' + row.firstname + ' ' + row.lastname));
						message.reply(('Talent: ' + row.talent));
						message.reply(('Status: ' + row.status));
						message.reply(('Height: ' + row.height + '    Weight: ' + row.weight));
						message.reply(('Likes: ' + row.likes + '    Dislikes: ' + row.dislikes));
						message.reply(('Monocoins: ' + row.monocoins));
						message.reply(('Strength: ' + row.savagery + '    Intelligence: ' + row.intellect + '    Charisma: ' + row.cunning));
						message.reply(('Kindness: ' + row.kills));
						message.reply(('Overall: ' + row.overall));
					}
				}).catch(() => 
				{
					console.error;
					sql.run("CREATE TABLE IF NOT EXISTS stattable (userID TEXT, firstname TEXT, lastname TEXT, talent TEXT, status TEXT, height TEXT, weight TEXT, likes TEXT, dislikes TEXT, monocoins INTEGER, savagery INTEGER, intellect INTEGER, cunning INTEGER, kills INTEGER, overall INTEGER)").then(() => 
					{
						message.reply ('ERROR: This user has not been initialized!');
					});
				});
            break;

			//THIS IS NEXT

			// !getInventory: gets a list of the player's Presents
			// subargs[1] is which page the student wishes to look at
            case 'getInventory':
				sql.get(`SELECT * FROM presents WHERE userId ="${message.author.id}"`).then(row => 
				{
					if (!row)
					{
						message.reply('ERROR: This user has not been initialized!');
					}
					else
					{
						switch(subargs[1])
						{
							case '1':
								var amount1 = row.p1;
								var amount2 = row.p2;
								var amount3 = row.p3;
								var amount4 = row.p4;
								var amount5 = row.p5;
								var amount6 = row.p6;
								var amount7 = row.p7;
								var amount8 = row.p8;
								var amount9 = row.p9;
								var amount10 = row.p10;
								var amount11 = row.p11;
								var amount12 = row.p12;
								var amount13 = row.p13;
								var amount14 = row.p14;
								var amount15 = row.p15;
								var amount16 = row.p16;
								var amount17 = row.p17;
								var amount18 = row.p18;
								var amount19 = row.p19;
								var amount20 = row.p20;

								sql.get('SELECT * FROM presentdata WHERE number = 001').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #001 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring1 = ('#00' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											var pstring1 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring1 =  ('ERROR: Present #001 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 002').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #002 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring2 = ('#00' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											var pstring2 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring2 =  ('ERROR: Present #002 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 003').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #003 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring3 = ('#00' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											var pstring3 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring3 =  ('ERROR: Present #003 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 004').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #004 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring4 = ('#00' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											var pstring4 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring4 =  ('ERROR: Present #004 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 005').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #005 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring5 = ('#00' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											var pstring5 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring5 =  ('ERROR: Present #005 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 006').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #006 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring6 = ('#00' + row.number + ': ' + row.name + ' (x' + amount6 + ')');
										}
										else
										{
											var pstring6 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring6 =  ('ERROR: Present #006 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 007').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #007 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring7 = ('#00' + row.number + ': ' + row.name + ' (x' + amount7 + ')');
										}
										else
										{
											var pstring7 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring7 =  ('ERROR: Present #007 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 008').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #008 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring8 = ('#00' + row.number + ': ' + row.name + ' (x' + amount8 + ')');
										}
										else
										{
											var pstring8 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring8 =  ('ERROR: Present #008 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 009').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #009 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring9 = ('#00' + row.number + ': ' + row.name + ' (x' + amount9 + ')');
										}
										else
										{
											var pstring9 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring9 =  ('ERROR: Present #009 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 010').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #010 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring10 = ('#0' + row.number + ': ' + row.name + ' (x' + amount10 + ')');
										}
										else
										{
											var pstring10 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring10 =  ('ERROR: Present #010 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 011').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #011 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring11 = ('#0' + row.number + ': ' + row.name + ' (x' + amount11 + ')');
										}
										else
										{
											var pstring11 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring11 =  ('ERROR: Present #011 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 012').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #012 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring12 = ('#0' + row.number + ': ' + row.name + ' (x' + amount12 + ')');
										}
										else
										{
											var pstring12 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring12 =  ('ERROR: Present #012 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 013').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #013 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring13 = ('#0' + row.number + ': ' + row.name + ' (x' + amount13 + ')');
										}
										else
										{
											var pstring13 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring13 =  ('ERROR: Present #013 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 014').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #014 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring14 = ('#0' + row.number + ': ' + row.name + ' (x' + amount14 + ')');
										}
										else
										{
											var pstring14 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring14 =  ('ERROR: Present #014 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 015').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #015 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring15 = ('#0' + row.number + ': ' + row.name + ' (x' + amount15 + ')');
										}
										else
										{
											var pstring15 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring15 =  ('ERROR: Present #015 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 016').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #016 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring16 = ('#0' + row.number + ': ' + row.name + ' (x' + amount16 + ')');
										}
										else
										{
											var pstring16 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring16 =  ('ERROR: Present #016 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 017').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #017 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring17 = ('#0' + row.number + ': ' + row.name + ' (x' + amount17 + ')');
										}
										else
										{
											var pstring17 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring17 =  ('ERROR: Present #017 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 018').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #018 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring18 = ('#0' + row.number + ': ' + row.name + ' (x' + amount18 + ')');
										}
										else
										{
											var pstring18 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring18 =  ('ERROR: Present #018 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 019').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #019 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring19 = ('#0' + row.number + ': ' + row.name + ' (x' + amount19 + ')');
										}
										else
										{
											var pstring19 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring19 =  ('ERROR: Present #019 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 020').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #020 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring20 = ('#0' + row.number + ': ' + row.name + ' (x' + amount20 + ')');
										}
										else
										{
											var pstring20 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring20 =  ('ERROR: Present #020 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								message.reply(pstring1 + '\n' + pstring2 + '\n' + pstring3 + '\n' + pstring4 + '\n' + pstring5 + '\n' + pstring6 + '\n' + pstring7 + '\n' + pstring8 + '\n' + pstring9 + '\n' + pstring10 + '\n' + pstring11 + '\n' + pstring12 + '\n' + pstring13 + '\n' + pstring13 + '\n' + pstring14 + '\n' + pstring15 + '\n' + pstring16 + '\n' + pstring17 + '\n' + pstring18 + '\n' + pstring19 + '\n' + pstring20); 
								
							break;

							case '2':
								var amount1 = row.p21;
								var amount2 = row.p22;
								var amount3 = row.p23;
								var amount4 = row.p24;
								var amount5 = row.p25;
								var amount6 = row.p26;
								var amount7 = row.p27;
								var amount8 = row.p28;
								var amount9 = row.p29;
								var amount10 = row.p30;
								var amount11 = row.p31;
								var amount12 = row.p32;
								var amount13 = row.p33;
								var amount14 = row.p34;
								var amount15 = row.p35;
								var amount16 = row.p36;
								var amount17 = row.p37;
								var amount18 = row.p38;
								var amount19 = row.p39;
								var amount20 = row.p40;

								sql.get('SELECT * FROM presentdata WHERE number = 021').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #021 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring1 = ('#0' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											var pstring1 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring1 =  ('ERROR: Present #021 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 022').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #022 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring2 = ('#0' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											var pstring2 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring2 =  ('ERROR: Present #022 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 023').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #023 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring3 = ('#0' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											var pstring3 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring3 =  ('ERROR: Present #023 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 024').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #024 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring4 = ('#0' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											var pstring4 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring4 =  ('ERROR: Present #024 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 025').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #025 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring5 = ('#0' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											var pstring5 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring5 =  ('ERROR: Present #025 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 026').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #026 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring6 = ('#0' + row.number + ': ' + row.name + ' (x' + amount6 + ')');
										}
										else
										{
											var pstring6 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring6 =  ('ERROR: Present #026 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 027').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #027 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring7 = ('#0' + row.number + ': ' + row.name + ' (x' + amount7 + ')');
										}
										else
										{
											var pstring7 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring7 =  ('ERROR: Present #027 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 028').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #028 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring8 = ('#0' + row.number + ': ' + row.name + ' (x' + amount8 + ')');
										}
										else
										{
											var pstring8 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring8 =  ('ERROR: Present #028 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 029').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #029 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring9 = ('#0' + row.number + ': ' + row.name + ' (x' + amount9 + ')');
										}
										else
										{
											var pstring9 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring9 =  ('ERROR: Present #029 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 030').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #030 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring10 = ('#0' + row.number + ': ' + row.name + ' (x' + amount10 + ')');
										}
										else
										{
											var pstring10 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring10 =  ('ERROR: Present #030 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 031').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #031 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring11 = ('#0' + row.number + ': ' + row.name + ' (x' + amount11 + ')');
										}
										else
										{
											var pstring11 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring11 =  ('ERROR: Present #031 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 032').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #032 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring12 = ('#0' + row.number + ': ' + row.name + ' (x' + amount12 + ')');
										}
										else
										{
											var pstring12 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring12 =  ('ERROR: Present #032 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 033').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #033 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring13 = ('#0' + row.number + ': ' + row.name + ' (x' + amount13 + ')');
										}
										else
										{
											var pstring13 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring13 =  ('ERROR: Present #033 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 034').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #034 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring14 = ('#0' + row.number + ': ' + row.name + ' (x' + amount14 + ')');
										}
										else
										{
											var pstring14 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring14 =  ('ERROR: Present #034 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 035').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #035 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring15 = ('#0' + row.number + ': ' + row.name + ' (x' + amount15 + ')');
										}
										else
										{
											var pstring15 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring15 =  ('ERROR: Present #035 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 036').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #036 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring16 = ('#0' + row.number + ': ' + row.name + ' (x' + amount16 + ')');
										}
										else
										{
											var pstring16 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring16 =  ('ERROR: Present #036 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 037').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #037 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring17 = ('#0' + row.number + ': ' + row.name + ' (x' + amount17 + ')');
										}
										else
										{
											var pstring17 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring17 =  ('ERROR: Present #037 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 038').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #038 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring18 = ('#0' + row.number + ': ' + row.name + ' (x' + amount18 + ')');
										}
										else
										{
											var pstring18 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring18 =  ('ERROR: Present #038 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 039').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #039 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring19 = ('#0' + row.number + ': ' + row.name + ' (x' + amount19 + ')');
										}
										else
										{
											var pstring19 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring19 =  ('ERROR: Present #039 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 040').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #040 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring20 = ('#0' + row.number + ': ' + row.name + ' (x' + amount20 + ')');
										}
										else
										{
											var pstring20 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring20 =  ('ERROR: Present #040 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});	
							break;

							case '3':
								var amount1 = row.p41;
								var amount2 = row.p42;
								var amount3 = row.p43;
								var amount4 = row.p44;
								var amount5 = row.p45;
								var amount6 = row.p46;
								var amount7 = row.p47;
								var amount8 = row.p48;
								var amount9 = row.p49;
								var amount10 = row.p50;
								var amount11 = row.p51;
								var amount12 = row.p52;
								var amount13 = row.p53;
								var amount14 = row.p54;
								var amount15 = row.p55;
								var amount16 = row.p56;
								var amount17 = row.p57;
								var amount18 = row.p58;
								var amount19 = row.p59;
								var amount20 = row.p60;

								sql.get('SELECT * FROM presentdata WHERE number = 041').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #041 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring1 = ('#0' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											var pstring1 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring1 =  ('ERROR: Present #041 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 042').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #042 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring2 = ('#0' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											var pstring2 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring2 =  ('ERROR: Present #042 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 043').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #043 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring3 = ('#0' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											var pstring3 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring3 =  ('ERROR: Present #043 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 044').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #044 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring4 = ('#0' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											var pstring4 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring4 =  ('ERROR: Present #044 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 045').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #045 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring5 = ('#0' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											var pstring5 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring5 =  ('ERROR: Present #045 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 046').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #046 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring6 = ('#0' + row.number + ': ' + row.name + ' (x' + amount6 + ')');
										}
										else
										{
											var pstring6 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring6 =  ('ERROR: Present #046 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 047').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #047 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring7 = ('#0' + row.number + ': ' + row.name + ' (x' + amount7 + ')');
										}
										else
										{
											var pstring7 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring7 =  ('ERROR: Present #047 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 048').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #048 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring8 = ('#0' + row.number + ': ' + row.name + ' (x' + amount8 + ')');
										}
										else
										{
											var pstring8 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring8 =  ('ERROR: Present #048 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 049').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #049 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring9 = ('#0' + row.number + ': ' + row.name + ' (x' + amount9 + ')');
										}
										else
										{
											var pstring9 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring9 =  ('ERROR: Present #049 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 050').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #050 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring10 = ('#0' + row.number + ': ' + row.name + ' (x' + amount10 + ')');
										}
										else
										{
											var pstring10 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring10 =  ('ERROR: Present #050 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 051').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #051 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring11 = ('#0' + row.number + ': ' + row.name + ' (x' + amount11 + ')');
										}
										else
										{
											var pstring11 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring11 =  ('ERROR: Present #051 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 052').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #052 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring12 = ('#0' + row.number + ': ' + row.name + ' (x' + amount12 + ')');
										}
										else
										{
											var pstring12 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring12 =  ('ERROR: Present #052 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 053').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #053 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring13 = ('#0' + row.number + ': ' + row.name + ' (x' + amount13 + ')');
										}
										else
										{
											var pstring13 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring13 =  ('ERROR: Present #053 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 054').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #054 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring14 = ('#0' + row.number + ': ' + row.name + ' (x' + amount14 + ')');
										}
										else
										{
											var pstring14 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring14 =  ('ERROR: Present #054 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 055').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #055 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring15 = ('#0' + row.number + ': ' + row.name + ' (x' + amount15 + ')');
										}
										else
										{
											var pstring15 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring15 =  ('ERROR: Present #055 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 056').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #056 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring16 = ('#0' + row.number + ': ' + row.name + ' (x' + amount16 + ')');
										}
										else
										{
											var pstring16 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring16 =  ('ERROR: Present #056 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 057').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #057 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring17 = ('#0' + row.number + ': ' + row.name + ' (x' + amount17 + ')');
										}
										else
										{
											var pstring17 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring17 =  ('ERROR: Present #057 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 058').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #058 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring18 = ('#0' + row.number + ': ' + row.name + ' (x' + amount18 + ')');
										}
										else
										{
											var pstring18 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring18 =  ('ERROR: Present #058 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 059').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #059 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring19 = ('#0' + row.number + ': ' + row.name + ' (x' + amount19 + ')');
										}
										else
										{
											var pstring19 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring19 =  ('ERROR: Present #059 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 060').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #060 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring20 = ('#0' + row.number + ': ' + row.name + ' (x' + amount20 + ')');
										}
										else
										{
											var pstring20 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring20 =  ('ERROR: Present #060 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});	
							break;

							case '4':
								var amount1 = row.p61;
								var amount2 = row.p62;
								var amount3 = row.p63;
								var amount4 = row.p64;
								var amount5 = row.p65;
								var amount6 = row.p66;
								var amount7 = row.p67;
								var amount8 = row.p68;
								var amount9 = row.p69;
								var amount10 = row.p70;
								var amount11 = row.p71;
								var amount12 = row.p72;
								var amount13 = row.p73;
								var amount14 = row.p74;
								var amount15 = row.p75;
								var amount16 = row.p76;
								var amount17 = row.p77;
								var amount18 = row.p78;
								var amount19 = row.p79;
								var amount20 = row.p80;

								sql.get('SELECT * FROM presentdata WHERE number = 061').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #061 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring1 = ('#0' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											var pstring1 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring1 =  ('ERROR: Present #061 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 062').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #062 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring2 = ('#0' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											var pstring2 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring2 =  ('ERROR: Present #062 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 063').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #063 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring3 = ('#0' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											var pstring3 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring3 =  ('ERROR: Present #063 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 064').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #064 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring4 = ('#0' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											var pstring4 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring4 =  ('ERROR: Present #064 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 065').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #065 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring5 = ('#0' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											var pstring5 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring5 =  ('ERROR: Present #065 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 066').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #066 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring6 = ('#0' + row.number + ': ' + row.name + ' (x' + amount6 + ')');
										}
										else
										{
											var pstring6 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring6 =  ('ERROR: Present #066 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 067').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #067 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring7 = ('#0' + row.number + ': ' + row.name + ' (x' + amount7 + ')');
										}
										else
										{
											var pstring7 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring7 =  ('ERROR: Present #067 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 068').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #068 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring8 = ('#0' + row.number + ': ' + row.name + ' (x' + amount8 + ')');
										}
										else
										{
											var pstring8 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring8 =  ('ERROR: Present #068 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 069').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #069 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring9 = ('#0' + row.number + ': ' + row.name + ' (x' + amount9 + ')');
										}
										else
										{
											var pstring9 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring9 =  ('ERROR: Present #069 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 070').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #070 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring10 = ('#0' + row.number + ': ' + row.name + ' (x' + amount10 + ')');
										}
										else
										{
											var pstring10 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring10 =  ('ERROR: Present #070 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 071').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #071 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring11 = ('#0' + row.number + ': ' + row.name + ' (x' + amount11 + ')');
										}
										else
										{
											var pstring11 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring11 =  ('ERROR: Present #071 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 072').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #072 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring12 = ('#0' + row.number + ': ' + row.name + ' (x' + amount12 + ')');
										}
										else
										{
											var pstring12 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring12 =  ('ERROR: Present #072 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 073').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #073 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring13 = ('#0' + row.number + ': ' + row.name + ' (x' + amount13 + ')');
										}
										else
										{
											var pstring13 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring13 =  ('ERROR: Present #073 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 074').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #074 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring14 = ('#0' + row.number + ': ' + row.name + ' (x' + amount14 + ')');
										}
										else
										{
											var pstring14 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring14 =  ('ERROR: Present #074 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 075').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #075 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring15 = ('#0' + row.number + ': ' + row.name + ' (x' + amount15 + ')');
										}
										else
										{
											var pstring15 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring15 =  ('ERROR: Present #075 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 076').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #076 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring16 = ('#0' + row.number + ': ' + row.name + ' (x' + amount16 + ')');
										}
										else
										{
											var pstring16 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring16 =  ('ERROR: Present #076 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 077').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #077 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring17 = ('#0' + row.number + ': ' + row.name + ' (x' + amount17 + ')');
										}
										else
										{
											var pstring17 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring17 =  ('ERROR: Present #077 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 078').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #078 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring18 = ('#0' + row.number + ': ' + row.name + ' (x' + amount18 + ')');
										}
										else
										{
											var pstring18 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring18 =  ('ERROR: Present #078 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 079').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #079 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring19 = ('#0' + row.number + ': ' + row.name + ' (x' + amount19 + ')');
										}
										else
										{
											var pstring19 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring19 =  ('ERROR: Present #079 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 080').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #080 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring20 = ('#0' + row.number + ': ' + row.name + ' (x' + amount20 + ')');
										}
										else
										{
											var pstring20 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring20 =  ('ERROR: Present #080 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});	
							break;

							case '5':
								var amount1 = row.p81;
								var amount2 = row.p82;
								var amount3 = row.p83;
								var amount4 = row.p84;
								var amount5 = row.p85;
								var amount6 = row.p86;
								var amount7 = row.p87;
								var amount8 = row.p88;
								var amount9 = row.p89;
								var amount10 = row.p90;
								var amount11 = row.p91;
								var amount12 = row.p92;
								var amount13 = row.p93;
								var amount14 = row.p94;
								var amount15 = row.p95;
								var amount16 = row.p96;
								var amount17 = row.p97;
								var amount18 = row.p98;
								var amount19 = row.p99;
								var amount20 = row.p100;

								sql.get('SELECT * FROM presentdata WHERE number = 081').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #081 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring1 = ('#0' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											var pstring1 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring1 =  ('ERROR: Present #081 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 082').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #082 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring2 = ('#0' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											var pstring2 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring2 =  ('ERROR: Present #082 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 083').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #083 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring3 = ('#0' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											var pstring3 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring3 =  ('ERROR: Present #083 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 084').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #084 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring4 = ('#0' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											var pstring4 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring4 =  ('ERROR: Present #084 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 085').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #085 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring5 = ('#0' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											var pstring5 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring5 =  ('ERROR: Present #085 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 086').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #086 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring6 = ('#0' + row.number + ': ' + row.name + ' (x' + amount6 + ')');
										}
										else
										{
											var pstring6 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring6 =  ('ERROR: Present #086 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 087').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #087 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring7 = ('#0' + row.number + ': ' + row.name + ' (x' + amount7 + ')');
										}
										else
										{
											var pstring7 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring7 =  ('ERROR: Present #087 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 088').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #088 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring8 = ('#0' + row.number + ': ' + row.name + ' (x' + amount8 + ')');
										}
										else
										{
											var pstring8 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring8 =  ('ERROR: Present #088 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 089').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #089 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring9 = ('#0' + row.number + ': ' + row.name + ' (x' + amount9 + ')');
										}
										else
										{
											var pstring9 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring9 =  ('ERROR: Present #089 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 090').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #090 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring10 = ('#0' + row.number + ': ' + row.name + ' (x' + amount10 + ')');
										}
										else
										{
											var pstring10 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring10 =  ('ERROR: Present #090 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 091').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #091 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring11 = ('#0' + row.number + ': ' + row.name + ' (x' + amount11 + ')');
										}
										else
										{
											var pstring11 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring11 =  ('ERROR: Present #091 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 092').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #092 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring12 = ('#0' + row.number + ': ' + row.name + ' (x' + amount12 + ')');
										}
										else
										{
											var pstring12 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring12 =  ('ERROR: Present #092 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 093').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #093 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring13 = ('#0' + row.number + ': ' + row.name + ' (x' + amount13 + ')');
										}
										else
										{
											var pstring13 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring13 =  ('ERROR: Present #093 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 094').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #094 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring14 = ('#0' + row.number + ': ' + row.name + ' (x' + amount14 + ')');
										}
										else
										{
											var pstring14 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring14 =  ('ERROR: Present #094 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 095').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #095 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring15 = ('#0' + row.number + ': ' + row.name + ' (x' + amount15 + ')');
										}
										else
										{
											var pstring15 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring15 =  ('ERROR: Present #095 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 096').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #096 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring16 = ('#0' + row.number + ': ' + row.name + ' (x' + amount16 + ')');
										}
										else
										{
											var pstring16 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring16 =  ('ERROR: Present #096 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 097').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #097 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring17 = ('#0' + row.number + ': ' + row.name + ' (x' + amount17 + ')');
										}
										else
										{
											var pstring17 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring17 =  ('ERROR: Present #097 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 098').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #098 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring18 = ('#0' + row.number + ': ' + row.name + ' (x' + amount18 + ')');
										}
										else
										{
											var pstring18 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring18 =  ('ERROR: Present #098 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 099').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #099 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring19 = ('#0' + row.number + ': ' + row.name + ' (x' + amount19 + ')');
										}
										else
										{
											var pstring19 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring19 =  ('ERROR: Present #099 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 100').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #100 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring20 = ('#' + row.number + ': ' + row.name + ' (x' + amount20 + ')');
										}
										else
										{
											var pstring20 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring20 =  ('ERROR: Present #100 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});	
							break;

							case '6':
								var amount1 = row.p101;
								var amount2 = row.p102;
								var amount3 = row.ch0;
								var amount4 = row.ch1;
								var amount5 = row.ch2;
								var amount6 = row.ch3;
								var amount7 = row.ch4;
								var amount8 = row.ch5;
								var amount9 = row.ch6;
								var amount10 = row.uw1;
								var amount11 = row.uw2;
								var amount12 = row.uw3;
								var amount13 = row.uw4;
								var amount14 = row.uw5;
								var amount15 = row.uw6;
								var amount16 = row.uw7;
								var amount17 = row.uw8;
								var amount18 = row.uw9;
								var amount19 = row.uw10;
								var amount20 = row.uw11;

								sql.get('SELECT * FROM presentdata WHERE number = 101').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #101 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring1 = ('#' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											var pstring1 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring1 =  ('ERROR: Present #101 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 102').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #102 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring2 = ('#' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											var pstring2 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring2 =  ('ERROR: Present #102 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 103').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #103 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring3 = ('#' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											var pstring3 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring3 =  ('ERROR: Present #103 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 104').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #104 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring4 = ('#' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											var pstring4 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring4 =  ('ERROR: Present #104 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 105').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #105 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring5 = ('#' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											var pstring5 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring5 =  ('ERROR: Present #105 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 106').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #106 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring6 = ('#' + row.number + ': ' + row.name + ' (x' + amount6 + ')');
										}
										else
										{
											var pstring6 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring6 =  ('ERROR: Present #106 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 107').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #107 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring7 = ('#' + row.number + ': ' + row.name + ' (x' + amount7 + ')');
										}
										else
										{
											var pstring7 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring7 =  ('ERROR: Present #107 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 108').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #108 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring8 = ('#' + row.number + ': ' + row.name + ' (x' + amount8 + ')');
										}
										else
										{
											var pstring8 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring8 =  ('ERROR: Present #108 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 109').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #109 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring9 = ('#' + row.number + ': ' + row.name + ' (x' + amount9 + ')');
										}
										else
										{
											var pstring9 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring9 =  ('ERROR: Present #109 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 110').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #110 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring10 = ('#' + row.number + ': ' + row.name + ' (x' + amount10 + ')');
										}
										else
										{
											var pstring10 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring10 =  ('ERROR: Present #110 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 111').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #111 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring11 = ('#' + row.number + ': ' + row.name + ' (x' + amount11 + ')');
										}
										else
										{
											var pstring11 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring11 =  ('ERROR: Present #111 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 112').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #112 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring12 = ('#' + row.number + ': ' + row.name + ' (x' + amount12 + ')');
										}
										else
										{
											var pstring12 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring12 =  ('ERROR: Present #112 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 113').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #113 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring13 = ('#' + row.number + ': ' + row.name + ' (x' + amount13 + ')');
										}
										else
										{
											var pstring13 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring13 =  ('ERROR: Present #113 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 114').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #114 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring14 = ('#' + row.number + ': ' + row.name + ' (x' + amount14 + ')');
										}
										else
										{
											var pstring14 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring14 =  ('ERROR: Present #114 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 115').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #115 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring15 = ('#' + row.number + ': ' + row.name + ' (x' + amount15 + ')');
										}
										else
										{
											var pstring15 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring15 =  ('ERROR: Present #115 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 116').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #116 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring16 = ('#' + row.number + ': ' + row.name + ' (x' + amount16 + ')');
										}
										else
										{
											var pstring16 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring16 =  ('ERROR: Present #116 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 117').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #117 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring17 = ('#' + row.number + ': ' + row.name + ' (x' + amount17 + ')');
										}
										else
										{
											var pstring17 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring17 =  ('ERROR: Present #117 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 118').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #118 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring18 = ('#' + row.number + ': ' + row.name + ' (x' + amount18 + ')');
										}
										else
										{
											var pstring18 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring18 =  ('ERROR: Present #118 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 119').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #119 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring19 = ('#' + row.number + ': ' + row.name + ' (x' + amount19 + ')');
										}
										else
										{
											var pstring19 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring19 =  ('ERROR: Present #119 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 120').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #120 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring20 = ('#' + row.number + ': ' + row.name + ' (x' + amount20 + ')');
										}
										else
										{
											var pstring20 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring20 =  ('ERROR: Present #120 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});	
							break;

							case '7':
								var amount1 = row.uw12;
								var amount2 = row.uw13;
								var amount3 = row.uw14;
								var amount4 = row.uw15;
								var amount5 = row.uw16;

								sql.get('SELECT * FROM presentdata WHERE number = 121').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #121 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring1 = ('#' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											var pstring1 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring1 =  ('ERROR: Present #121 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 122').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #122 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring2 = ('#' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											var pstring2 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring2 =  ('ERROR: Present #122 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 123').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #123 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring3 = ('#' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											var pstring3 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring3 =  ('ERROR: Present #123 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 124').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #124 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring4 = ('#' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											var pstring4 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring4 =  ('ERROR: Present #124 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 125').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #125 has not been initialized!');
									}
									else
									{
										if (row.found == true)
										{
											var pstring5 = ('#' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											var pstring5 = ('#' + row.number + ': ??? (x0)');
										}
									}
								}).catch(() => 
								{
									console.error;
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										var pstring5 =  ('ERROR: Present #125 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});
							break;
						}
					}
				}).catch(() => 
				{
					console.error;
					sql.run("CREATE TABLE IF NOT EXISTS presents (userID TEXT, firstname TEXT, p1 INTEGER, p2 INTEGER, p3 INTEGER, p4 INTEGER, p5 INTEGER, p6 INTEGER, p7 INTEGER, p8 INTEGER, p9 INTEGER, p10 INTEGER, p11 INTEGER, p12 INTEGER, p13 INTEGER, p14 INTEGER, p15 INTEGER, p16 INTEGER, p17 INTEGER, p18 INTEGER, p19 INTEGER, p20 INTEGER, p21 INTEGER, p22 INTEGER, p23 INTEGER, p24 INTEGER, p25 INTEGER, p26 INTEGER, p27 INTEGER, p28 INTEGER, p29 INTEGER, p30 INTEGER, p31 INTEGER, p32 INTEGER, p33 INTEGER, p34 INTEGER, p35 INTEGER, p36 INTEGER, p37 INTEGER, p38 INTEGER, p39 INTEGER, p40 INTEGER, p41 INTEGER, p42 INTEGER, p43 INTEGER, p44 INTEGER, p45 INTEGER, p46 INTEGER, p47 INTEGER, p48 INTEGER, p49 INTEGER, p50 INTEGER, p51 INTEGER, p52 INTEGER, p53 INTEGER, p54 INTEGER, p55 INTEGER, p56 INTEGER, p57 INTEGER, p58 INTEGER, p59 INTEGER, p60 INTEGER, p61 INTEGER, p62 INTEGER, p63 INTEGER, p64 INTEGER, p65 INTEGER, p66 INTEGER, p67 INTEGER, p68 INTEGER, p69 INTEGER, p70 INTEGER, p71 INTEGER, p72 INTEGER, p73 INTEGER, p74 INTEGER, p75 INTEGER, p76 INTEGER, p77 INTEGER, p78 INTEGER, p79 INTEGER, p80 INTEGER, p81 INTEGER, p82 INTEGER, p83 INTEGER, p84 INTEGER, p85 INTEGER, p86 INTEGER, p87 INTEGER, p88 INTEGER, p89 INTEGER, p90 INTEGER, p91 INTEGER, p92 INTEGER, p93 INTEGER, p94 INTEGER, p95 INTEGER, p96 INTEGER, p97 INTEGER, p98 INTEGER, p99 INTEGER, p100 INTEGER, p101 INTEGER, p102 INTEGER, ch0 INTEGER, ch1 INTEGER, ch2 INTEGER, ch3 INTEGER, ch4 INTEGER, ch5 INTEGER, ch6 INTEGER, uw1 INTEGER, uw2 INTEGER, uw3 INTEGER, uw4 INTEGER, uw5 INTEGER, uw6 INTEGER, uw7 INTEGER, uw8 INTEGER, uw9 INTEGER, uw10 INTEGER, uw11 INTEGER, uw12 INTEGER, uw13 INTEGER, uw14 INTEGER, uw15 INTEGER, uw16 INTEGER)").then(() => 
					{
						message.reply ('ERROR: This user has not been initialized!');
						message.reply ('Table presents created.');
					});
				});
            break;

			// !getStudentInfo: gets a masterlist of students with basic info
            case 'getStudentInfo':
                client.sendMessage(message.author, "PLACEHOLDER");
            break;


			//DAILY LIFE COMMANDS

			// !monomono
			// !monomono-bet: bets a number of monocoins on obtaining a new present.
            case 'monomono':
                switch (subargs[2])
				{
					case 'bet':
						
					break;
				}
            break;

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
			// subargs[5] - subargs [6] is the player's height and weight
			// subargs[7] - subargs [8] is the players likes and dislikes
			// subargs[9] - subargs[12] is the student's stats (savagery, intellect, cunning, kills)
			// subargs[13] is the player's fteID (for shard numbers)
            case 'addStudent':
				if(message.author.id == 81538107446398976) 
				{
					sql.get('SELECT * FROM stattable WHERE userId = target').then(row => 
					{
						if (!row)
						{
							sql.run("INSERT INTO stattable VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, subargs[2], subargs[3], subargs[4], "ALIVE", subargs[5], subargs[6], subargs[7], subargs[8], 1, parseInt(subargs[9]), parseInt(subargs[10]), parseInt(subargs[11]), parseInt(subargs[12]), (parseInt(subargs[9]) + parseInt(subargs[10]) + parseInt(subargs[11]) + parseInt(subargs[12]))]);
						}
						else
						{
							message.reply('This user already exists!');
						}
					}).catch(() => 
					{
						console.error;
						sql.run("CREATE TABLE IF NOT EXISTS stattable (userID TEXT, firstname TEXT, lastname TEXT, talent TEXT, status TEXT, height TEXT, weight TEXT, likes TEXT, dislikes TEXT, monocoins INTEGER, savagery INTEGER, intellect INTEGER, cunning INTEGER, kills INTEGER, overall INTEGER)").then(() => 
						{
							sql.run("INSERT INTO stattable VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, subargs[2], subargs[3], subargs[4], "ALIVE", subargs[5], subargs[6], subargs[7], subargs[8], 1, parseInt(subargs[9]), parseInt(subargs[10]), parseInt(subargs[11]), parseInt(subargs[12]), (parseInt(subargs[9]) + parseInt(subargs[10]) + parseInt(subargs[11]) + parseInt(subargs[12]))]);
						});
						message.reply('Table stattable created.');
					});

					sql.get('SELECT * FROM fteData WHERE userId = target').then(row => 
					{
						if (!row)
						{
							sql.run("INSERT INTO fteData VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, parseInt(subargs[13]), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
							switch(subargs[13])
							{
								case '1':
									sql.run ("UPDATE fteData SET shards1 = 6 WHERE userID = target");
								break;
								
								case '2':
									sql.run ("UPDATE fteData SET shards2 = 6 WHERE userID = target");
								break;

								case '3':
									sql.run ("UPDATE fteData SET shards3 = 6 WHERE userID = target");
								break;

								case '4':
									sql.run ("UPDATE fteData SET shards4 = 6 WHERE userID = target");
								break;

								case '5':
									sql.run ("UPDATE fteData SET shards5 = 6 WHERE userID = target");
								break;

								case '6':
									sql.run ("UPDATE fteData SET shards6 = 6 WHERE userID = target");
								break;

								case '7':
									sql.run ("UPDATE fteData SET shards7 = 6 WHERE userID = target");
								break;

								case '8':
									sql.run ("UPDATE fteData SET shards8 = 6 WHERE userID = target");
								break;

								case '9':
									sql.run ("UPDATE fteData SET shards9 = 6 WHERE userID = target");
								break;

								case '10':
									sql.run ("UPDATE fteData SET shards10 = 6 WHERE userID = target");
								break;

								case '11':
									sql.run ("UPDATE fteData SET shards11 = 6 WHERE userID = target");
								break;

								case '12':
									sql.run ("UPDATE fteData SET shards12 = 6 WHERE userID = target");
								break;

								case '13':
									sql.run ("UPDATE fteData SET shards13 = 6 WHERE userID = target");
								break;

								case '14':
									sql.run ("UPDATE fteData SET shards14 = 6 WHERE userID = target");
								break;

								case '15':
									sql.run ("UPDATE fteData SET shards15 = 6 WHERE userID = target");
								break;

								case '16':
									sql.run ("UPDATE fteData SET shards16 = 6 WHERE userID = target");
								break;
							}
						}
						else
						{
							message.reply('^');
						}
					}).catch(() =>
					{
						console.error;
						message.reply('Table fteData created.');
						sql.run("CREATE TABLE IF NOT EXISTS fteData (userID TEXT, fteID INTEGER, playersApproached INTEGER, approachedBy INTEGER, shards1 INTEGER, shards2 INTEGER, shards3 INTEGER, shards4 INTEGER, shards5 INTEGER, shards6 INTEGER, shards7 INTEGER, shards8 INTEGER, shards9 INTEGER, shards10 INTEGER, shards11 INTEGER, shards12 INTEGER, shards13 INTEGER, shards14 INTEGER, shards15 INTEGER, shards16 INTEGER)").then(() => 
						{
							sql.run("INSERT INTO fteData VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, parseInt(subargs[11]), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
						});
					});
					
					sql.get('SELECT * FROM presents WHERE userId ="${message.author.id}"').then(row => 
					{
						if (!row)
						{
							sql.run("INSERT INTO presents VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, subargs[2], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
						}
						else
						{
							message.reply('^')
						}
					}).catch(() => 
					{
						console.error;
						sql.run("CREATE TABLE IF NOT EXISTS presents (userID TEXT, firstname TEXT, p1 INTEGER, p2 INTEGER, p3 INTEGER, p4 INTEGER, p5 INTEGER, p6 INTEGER, p7 INTEGER, p8 INTEGER, p9 INTEGER, p10 INTEGER, p11 INTEGER, p12 INTEGER, p13 INTEGER, p14 INTEGER, p15 INTEGER, p16 INTEGER, p17 INTEGER, p18 INTEGER, p19 INTEGER, p20 INTEGER, p21 INTEGER, p22 INTEGER, p23 INTEGER, p24 INTEGER, p25 INTEGER, p26 INTEGER, p27 INTEGER, p28 INTEGER, p29 INTEGER, p30 INTEGER, p31 INTEGER, p32 INTEGER, p33 INTEGER, p34 INTEGER, p35 INTEGER, p36 INTEGER, p37 INTEGER, p38 INTEGER, p39 INTEGER, p40 INTEGER, p41 INTEGER, p42 INTEGER, p43 INTEGER, p44 INTEGER, p45 INTEGER, p46 INTEGER, p47 INTEGER, p48 INTEGER, p49 INTEGER, p50 INTEGER, p51 INTEGER, p52 INTEGER, p53 INTEGER, p54 INTEGER, p55 INTEGER, p56 INTEGER, p57 INTEGER, p58 INTEGER, p59 INTEGER, p60 INTEGER, p61 INTEGER, p62 INTEGER, p63 INTEGER, p64 INTEGER, p65 INTEGER, p66 INTEGER, p67 INTEGER, p68 INTEGER, p69 INTEGER, p70 INTEGER, p71 INTEGER, p72 INTEGER, p73 INTEGER, p74 INTEGER, p75 INTEGER, p76 INTEGER, p77 INTEGER, p78 INTEGER, p79 INTEGER, p80 INTEGER, p81 INTEGER, p82 INTEGER, p83 INTEGER, p84 INTEGER, p85 INTEGER, p86 INTEGER, p87 INTEGER, p88 INTEGER, p89 INTEGER, p90 INTEGER, p91 INTEGER, p92 INTEGER, p93 INTEGER, p94 INTEGER, p95 INTEGER, p96 INTEGER, p97 INTEGER, p98 INTEGER, p99 INTEGER, p100 INTEGER, p101 INTEGER, p102 INTEGER, ch0 INTEGER, ch1 INTEGER, ch2 INTEGER, ch3 INTEGER, ch4 INTEGER, ch5 INTEGER, ch6 INTEGER, uw1 INTEGER, uw2 INTEGER, uw3 INTEGER, uw4 INTEGER, uw5 INTEGER, uw6 INTEGER, uw7 INTEGER, uw8 INTEGER, uw9 INTEGER, uw10 INTEGER, uw11 INTEGER, uw12 INTEGER, uw13 INTEGER, uw14 INTEGER, uw15 INTEGER, uw16 INTEGER)").then(() => 
						{
							sql.run("INSERT INTO presents VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [target, subargs[2], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
						});
						message.reply('Table presents created.');
					});

					message.reply('Student ' + subargs[2] + ' ' + subargs[3] + ' with userID ' + target + ' has been added.');
				}
				else
				{
					message.reply('This command is exclusive to Monokuma!');
				}
				break;

			// !addPresent: adds a new present
			// subargs[1] is the present ID (ranges from 001 to ~125)
			// subargs[2] is the present's name
			// subargs[3] is the present's description
			// The present is not found by default.
			// All 16 present affinities are set to 0 (Hate) by default.
            case 'addPresent':
                sql.get('SELECT * FROM presentdata WHERE number = subargs[1]').then(row => 
				{
					if (!row)
					{
						sql.run("INSERT INTO presentdata VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [subargs[1], subargs[2], subargs[3], false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
					}
					else
					{
						message.reply('This item has already been initialized!')
					}
				}).catch(() => 
				{
					console.error;
					sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
					{
						sql.run("INSERT INTO presentdata VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [subargs[1], subargs[2], subargs[3], false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
					});
					message.reply('Table presentdata created.');
				});

				message.reply ('Present #' + subargs[1] + ' has been set to ' + subargs[2] + ".");
            break;

			// !awardPresent: gives a free present to a player
			// CURRENTLY ONLY SET UP TO 101
			// subargs[1] is the player's first name
			// subargs[2] is the present number to award
			case 'awardPresent':
				switch(subargs[2])
				{
					case '001':
						sql.run ("UPDATE presents SET p1 += 1 WHERE firstname = subargs[1]");
					break;
					case '002':
						sql.run ("UPDATE presents SET p2 += 1 WHERE firstname = subargs[1]");
					break;
					case '003':
						sql.run ("UPDATE presents SET p3 += 1 WHERE firstname = subargs[1]");
					break;
					case '004':
						sql.run ("UPDATE presents SET p4 += 1 WHERE firstname = subargs[1]");
					break;
					case '005':
						sql.run ("UPDATE presents SET p5 += 1 WHERE firstname = subargs[1]");
					break;
					case '006':
						sql.run ("UPDATE presents SET p6 += 1 WHERE firstname = subargs[1]");
					break;
					case '007':
						sql.run ("UPDATE presents SET p7 += 1 WHERE firstname = subargs[1]");
					break;
					case '008':
						sql.run ("UPDATE presents SET p8 += 1 WHERE firstname = subargs[1]");
					break;
					case '009':
						sql.run ("UPDATE presents SET p9 += 1 WHERE firstname = subargs[1]");
					break;
					case '010':
						sql.run ("UPDATE presents SET p10 += 1 WHERE firstname = subargs[1]");
					break;
					case '011':
						sql.run ("UPDATE presents SET p11 += 1 WHERE firstname = subargs[1]");
					break;
					case '012':
						sql.run ("UPDATE presents SET p12 += 1 WHERE firstname = subargs[1]");
					break;
					case '013':
						sql.run ("UPDATE presents SET p13 += 1 WHERE firstname = subargs[1]");
					break;
					case '014':
						sql.run ("UPDATE presents SET p14 += 1 WHERE firstname = subargs[1]");
					break;
					case '015':
						sql.run ("UPDATE presents SET p15 += 1 WHERE firstname = subargs[1]");
					break;
					case '016':
						sql.run ("UPDATE presents SET p16 += 1 WHERE firstname = subargs[1]");
					break;
					case '017':
						sql.run ("UPDATE presents SET p17 += 1 WHERE firstname = subargs[1]");
					break;
					case '018':
						sql.run ("UPDATE presents SET p18 += 1 WHERE firstname = subargs[1]");
					break;
					case '019':
						sql.run ("UPDATE presents SET p19 += 1 WHERE firstname = subargs[1]");
					break;
					case '020':
						sql.run ("UPDATE presents SET p20 += 1 WHERE firstname = subargs[1]");
					break;
					case '021':
						sql.run ("UPDATE presents SET p21 += 1 WHERE firstname = subargs[1]");
					break;
					case '022':
						sql.run ("UPDATE presents SET p22 += 1 WHERE firstname = subargs[1]");
					break;
					case '023':
						sql.run ("UPDATE presents SET p23 += 1 WHERE firstname = subargs[1]");
					break;
					case '024':
						sql.run ("UPDATE presents SET p24 += 1 WHERE firstname = subargs[1]");
					break;
					case '025':
						sql.run ("UPDATE presents SET p25 += 1 WHERE firstname = subargs[1]");
					break;
					case '026':
						sql.run ("UPDATE presents SET p26 += 1 WHERE firstname = subargs[1]");
					break;
					case '027':
						sql.run ("UPDATE presents SET p27 += 1 WHERE firstname = subargs[1]");
					break;
					case '028':
						sql.run ("UPDATE presents SET p28 += 1 WHERE firstname = subargs[1]");
					break;
					case '029':
						sql.run ("UPDATE presents SET p29 += 1 WHERE firstname = subargs[1]");
					break;
					case '030':
						sql.run ("UPDATE presents SET p30 += 1 WHERE firstname = subargs[1]");
					break;
					case '031':
						sql.run ("UPDATE presents SET p31 += 1 WHERE firstname = subargs[1]");
					break;
					case '032':
						sql.run ("UPDATE presents SET p32 += 1 WHERE firstname = subargs[1]");
					break;
					case '033':
						sql.run ("UPDATE presents SET p33 += 1 WHERE firstname = subargs[1]");
					break;
					case '034':
						sql.run ("UPDATE presents SET p34 += 1 WHERE firstname = subargs[1]");
					break;
					case '035':
						sql.run ("UPDATE presents SET p35 += 1 WHERE firstname = subargs[1]");
					break;
					case '036':
						sql.run ("UPDATE presents SET p36 += 1 WHERE firstname = subargs[1]");
					break;
					case '037':
						sql.run ("UPDATE presents SET p37 += 1 WHERE firstname = subargs[1]");
					break;
					case '038':
						sql.run ("UPDATE presents SET p38 += 1 WHERE firstname = subargs[1]");
					break;
					case '039':
						sql.run ("UPDATE presents SET p39 += 1 WHERE firstname = subargs[1]");
					break;
					case '040':
						sql.run ("UPDATE presents SET p40 += 1 WHERE firstname = subargs[1]");
					break;
					case '041':
						sql.run ("UPDATE presents SET p41 += 1 WHERE firstname = subargs[1]");
					break;
					case '042':
						sql.run ("UPDATE presents SET p42 += 1 WHERE firstname = subargs[1]");
					break;
					case '043':
						sql.run ("UPDATE presents SET p43 += 1 WHERE firstname = subargs[1]");
					break;
					case '044':
						sql.run ("UPDATE presents SET p44 += 1 WHERE firstname = subargs[1]");
					break;
					case '045':
						sql.run ("UPDATE presents SET p45 += 1 WHERE firstname = subargs[1]");
					break;
					case '046':
						sql.run ("UPDATE presents SET p46 += 1 WHERE firstname = subargs[1]");
					break;
					case '047':
						sql.run ("UPDATE presents SET p47 += 1 WHERE firstname = subargs[1]");
					break;
					case '048':
						sql.run ("UPDATE presents SET p48 += 1 WHERE firstname = subargs[1]");
					break;
					case '049':
						sql.run ("UPDATE presents SET p49 += 1 WHERE firstname = subargs[1]");
					break;
					case '050':
						sql.run ("UPDATE presents SET p50 += 1 WHERE firstname = subargs[1]");
					break;
					case '051':
						sql.run ("UPDATE presents SET p51 += 1 WHERE firstname = subargs[1]");
					break;
					case '052':
						sql.run ("UPDATE presents SET p52 += 1 WHERE firstname = subargs[1]");
					break;
					case '053':
						sql.run ("UPDATE presents SET p53 += 1 WHERE firstname = subargs[1]");
					break;
					case '054':
						sql.run ("UPDATE presents SET p54 += 1 WHERE firstname = subargs[1]");
					break;
					case '055':
						sql.run ("UPDATE presents SET p55 += 1 WHERE firstname = subargs[1]");
					break;
					case '056':
						sql.run ("UPDATE presents SET p56 += 1 WHERE firstname = subargs[1]");
					break;
					case '057':
						sql.run ("UPDATE presents SET p57 += 1 WHERE firstname = subargs[1]");
					break;
					case '058':
						sql.run ("UPDATE presents SET p58 += 1 WHERE firstname = subargs[1]");
					break;
					case '059':
						sql.run ("UPDATE presents SET p59 += 1 WHERE firstname = subargs[1]");
					break;
					case '060':
						sql.run ("UPDATE presents SET p60 += 1 WHERE firstname = subargs[1]");
					break;
					case '061':
						sql.run ("UPDATE presents SET p61 += 1 WHERE firstname = subargs[1]");
					break;
					case '062':
						sql.run ("UPDATE presents SET p62 += 1 WHERE firstname = subargs[1]");
					break;
					case '063':
						sql.run ("UPDATE presents SET p63 += 1 WHERE firstname = subargs[1]");
					break;
					case '064':
						sql.run ("UPDATE presents SET p64 += 1 WHERE firstname = subargs[1]");
					break;
					case '065':
						sql.run ("UPDATE presents SET p65 += 1 WHERE firstname = subargs[1]");
					break;
					case '066':
						sql.run ("UPDATE presents SET p66 += 1 WHERE firstname = subargs[1]");
					break;
					case '067':
						sql.run ("UPDATE presents SET p67 += 1 WHERE firstname = subargs[1]");
					break;
					case '068':
						sql.run ("UPDATE presents SET p68 += 1 WHERE firstname = subargs[1]");
					break;
					case '069':
						sql.run ("UPDATE presents SET p69 += 1 WHERE firstname = subargs[1]");
					break;
					case '070':
						sql.run ("UPDATE presents SET p70 += 1 WHERE firstname = subargs[1]");
					break;
					case '071':
						sql.run ("UPDATE presents SET p71 += 1 WHERE firstname = subargs[1]");
					break;
					case '072':
						sql.run ("UPDATE presents SET p72 += 1 WHERE firstname = subargs[1]");
					break;
					case '073':
						sql.run ("UPDATE presents SET p73 += 1 WHERE firstname = subargs[1]");
					break;
					case '074':
						sql.run ("UPDATE presents SET p74 += 1 WHERE firstname = subargs[1]");
					break;
					case '075':
						sql.run ("UPDATE presents SET p75 += 1 WHERE firstname = subargs[1]");
					break;
					case '076':
						sql.run ("UPDATE presents SET p76 += 1 WHERE firstname = subargs[1]");
					break;
					case '077':
						sql.run ("UPDATE presents SET p77 += 1 WHERE firstname = subargs[1]");
					break;
					case '078':
						sql.run ("UPDATE presents SET p78 += 1 WHERE firstname = subargs[1]");
					break;
					case '079':
						sql.run ("UPDATE presents SET p79 += 1 WHERE firstname = subargs[1]");
					break;
					case '080':
						sql.run ("UPDATE presents SET p80 += 1 WHERE firstname = subargs[1]");
					break;
					case '081':
						sql.run ("UPDATE presents SET p81 += 1 WHERE firstname = subargs[1]");
					break;
					case '082':
						sql.run ("UPDATE presents SET p82 += 1 WHERE firstname = subargs[1]");
					break;
					case '083':
						sql.run ("UPDATE presents SET p83 += 1 WHERE firstname = subargs[1]");
					break;
					case '084':
						sql.run ("UPDATE presents SET p84 += 1 WHERE firstname = subargs[1]");
					break;
					case '085':
						sql.run ("UPDATE presents SET p85 += 1 WHERE firstname = subargs[1]");
					break;
					case '086':
						sql.run ("UPDATE presents SET p86 += 1 WHERE firstname = subargs[1]");
					break;
					case '087':
						sql.run ("UPDATE presents SET p87 += 1 WHERE firstname = subargs[1]");
					break;
					case '088':
						sql.run ("UPDATE presents SET p88 += 1 WHERE firstname = subargs[1]");
					break;
					case '089':
						sql.run ("UPDATE presents SET p89 += 1 WHERE firstname = subargs[1]");
					break;
					case '090':
						sql.run ("UPDATE presents SET p90 += 1 WHERE firstname = subargs[1]");
					break;
					case '091':
						sql.run ("UPDATE presents SET p91 += 1 WHERE firstname = subargs[1]");
					break;
					case '092':
						sql.run ("UPDATE presents SET p92 += 1 WHERE firstname = subargs[1]");
					break;
					case '093':
						sql.run ("UPDATE presents SET p93 += 1 WHERE firstname = subargs[1]");
					break;
					case '094':
						sql.run ("UPDATE presents SET p94 += 1 WHERE firstname = subargs[1]");
					break;
					case '095':
						sql.run ("UPDATE presents SET p95 += 1 WHERE firstname = subargs[1]");
					break;
					case '096':
						sql.run ("UPDATE presents SET p96 += 1 WHERE firstname = subargs[1]");
					break;
					case '097':
						sql.run ("UPDATE presents SET p97 += 1 WHERE firstname = subargs[1]");
					break;
					case '098':
						sql.run ("UPDATE presents SET p98 += 1 WHERE firstname = subargs[1]");
					break;
					case '099':
						sql.run ("UPDATE presents SET p99 += 1 WHERE firstname = subargs[1]");
					break;
					case '100':
						sql.run ("UPDATE presents SET p100 += 1 WHERE firstname = subargs[1]");
					break;
					case '101':
						sql.run ("UPDATE presents SET p101 += 1 WHERE firstname = subargs[1]");
					break;
				}
				sql.run ("UPDATE presentdata SET found = true WHERE number = subargs[2]");
			break;

			// !giveCoins: pays out Monocoins to a target
            case 'giveCoins':
                sql.run ("UPDATE stattable SET monocoins += subargs[2] WHERE firstname = target");
				
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
     }
});

client.login("MzkxMjQ1MDU0ODQ2NTY2NDAw.DSXqOw.RsTojaMs7z4ue_QHd1fgrMWIhzM");

const port = process.env.PORT || 5000;