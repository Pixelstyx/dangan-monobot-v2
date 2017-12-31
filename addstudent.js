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
