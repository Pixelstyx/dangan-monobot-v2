// !monomono
			// !monomono-bet: bets subargs[3] monocoins on obtaining a new present.
			// !monomono-check: checks the % new chance for subargs[3] monocoins.
            case 'monomono':

				const player = await sql.get("SELECT monocoins FROM stattable WHERE userId = " + message.author.id);

				if (!player)
				{
					message.reply('ERROR: This user has not been initialized!');
					return;
				}

				const presentsFound = await sql.get("SELECT count(*) FROM presentdata WHERE found");

                switch (parts[2])
				{
					case 'bet':
						if (subargs[3] <= player.monocoins) //Congrats! New present.
						{
							if ((Math.floor(Math.random() * 100)) > (presentsFound - subargs[3]))
							{
								const prize = await sql.get("SELECT * FROM presentdata WHERE found = false ORDER BY RANDOM() LIMIT 1;"); //select prize randomly from pool
								sql.run ("UPDATE stattable SET monocoins -= " + subargs[3] + " WHERE userId = " + message.author.id); //subtract monocoins spent
								sql.run ("UPDATE presents SET p" + prize.number + " += 1 WHERE userId = " + message.author.id); //add present to player's inventory
								sql.run ("UPDATE presentdata SET found = true WHERE number = " + prize.number); //makes sure the present is now found
								message.reply("Congrats! You got: " + prize.name + " (NEW!)");
							}
							else //if our random number lies inside the range of presentsFound, not new.
							{
								const prize = await sql.get("SELECT * FROM presentdata WHERE found = true ORDER BY RANDOM() LIMIT 1;");
								sql.run ("UPDATE stattable SET monocoins -= " + subargs[3] + " WHERE userId = " + message.author.id);
								sql.run ("UPDATE presents SET p" + prize.number + " += 1 WHERE userId = " + message.author.id);
								message.reply("Congrats! You got: " + prize.name);
							}
						}
						else
						{
							message.reply("You're too poor for this! Get some cash and try again.");
						}
					break;

					case 'check':
						message.reply("Chance for new: " + (99 + subargs [3] - presentsFound) + "%");
					break;
				}
            break;
