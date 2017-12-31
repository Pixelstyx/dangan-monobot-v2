// !getInventory: gets a list of the player's Presents
			// subargs[1] is which page the student wishes to look at
            case 'getInventory':
				sql.get("SELECT * FROM presents WHERE userId = " + message.author.id).then(row => 
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

								var pstring1;
								var pstring2;
								var pstring3;
								var pstring4;
								var pstring5;
								var pstring6;
								var pstring7;
								var pstring8;
								var pstring9;
								var pstring10;
								var pstring11;
								var pstring12;
								var pstring13;
								var pstring14;
								var pstring15;
								var pstring16;
								var pstring17;
								var pstring18;
								var pstring19;
								var pstring20;

								sql.get('SELECT * FROM presentdata WHERE number = 001').then(row => 
								{
									if (!row)
									{
										let pstring1 = ('ERROR: Present #001 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring1 = ('#00' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											let pstring1 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring1 =  ('ERROR: Present #001 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 002').then(row => 
								{
									if (!row)
									{
										let pstring2 = ('ERROR: Present #002 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring2 = ('#00' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											let pstring2 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring2 =  ('ERROR: Present #002 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 003').then(row => 
								{
									if (!row)
									{
										let pstring3 = ('ERROR: Present #003 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring3 = ('#00' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											let pstring3 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring3 =  ('ERROR: Present #003 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 004').then(row => 
								{
									if (!row)
									{
										let pstring4 = ('ERROR: Present #004 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring4 = ('#00' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											let pstring4 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring4 =  ('ERROR: Present #004 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 005').then(row => 
								{
									if (!row)
									{
										let pstring5 = ('ERROR: Present #005 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring5 = ('#00' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											let pstring5 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring5 =  ('ERROR: Present #005 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 006').then(row => 
								{
									if (!row)
									{
										let pstring6 = ('ERROR: Present #006 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring6 = ('#00' + row.number + ': ' + row.name + ' (x' + amount6 + ')');
										}
										else
										{
											let pstring6 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring6 =  ('ERROR: Present #006 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 007').then(row => 
								{
									if (!row)
									{
										let pstring7 = ('ERROR: Present #007 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring7 = ('#00' + row.number + ': ' + row.name + ' (x' + amount7 + ')');
										}
										else
										{
											let pstring7 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring7 =  ('ERROR: Present #007 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 008').then(row => 
								{
									if (!row)
									{
										let pstring8 = ('ERROR: Present #008 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring8 = ('#00' + row.number + ': ' + row.name + ' (x' + amount8 + ')');
										}
										else
										{
											let pstring8 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring8 =  ('ERROR: Present #008 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 009').then(row => 
								{
									if (!row)
									{
										let pstring9 = ('ERROR: Present #009 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring9 = ('#00' + row.number + ': ' + row.name + ' (x' + amount9 + ')');
										}
										else
										{
											let pstring9 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring9 =  ('ERROR: Present #009 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 010').then(row => 
								{
									if (!row)
									{
										let pstring10 = ('ERROR: Present #010 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring10 = ('#0' + row.number + ': ' + row.name + ' (x' + amount10 + ')');
										}
										else
										{
											let pstring10 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring10 =  ('ERROR: Present #010 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 011').then(row => 
								{
									if (!row)
									{
										let pstring11 = ('ERROR: Present #011 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring11 = ('#0' + row.number + ': ' + row.name + ' (x' + amount11 + ')');
										}
										else
										{
											let pstring11 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring11 =  ('ERROR: Present #011 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 012').then(row => 
								{
									if (!row)
									{
										let pstring12 = ('ERROR: Present #012 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring12 = ('#0' + row.number + ': ' + row.name + ' (x' + amount12 + ')');
										}
										else
										{
											let pstring12 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring12 =  ('ERROR: Present #012 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 013').then(row => 
								{
									if (!row)
									{
										let pstring13 = ('ERROR: Present #013 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring13 = ('#0' + row.number + ': ' + row.name + ' (x' + amount13 + ')');
										}
										else
										{
											let pstring13 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring13 =  ('ERROR: Present #013 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 014').then(row => 
								{
									if (!row)
									{
										let pstring14 = ('ERROR: Present #014 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring14 = ('#0' + row.number + ': ' + row.name + ' (x' + amount14 + ')');
										}
										else
										{
											let pstring14 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring14 =  ('ERROR: Present #014 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 015').then(row => 
								{
									if (!row)
									{
										let pstring15 = ('ERROR: Present #015 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring15 = ('#0' + row.number + ': ' + row.name + ' (x' + amount15 + ')');
										}
										else
										{
											let pstring15 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring15 =  ('ERROR: Present #015 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 016').then(row => 
								{
									if (!row)
									{
										let pstring16 = ('ERROR: Present #016 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring16 = ('#0' + row.number + ': ' + row.name + ' (x' + amount16 + ')');
										}
										else
										{
											let pstring16 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring16 =  ('ERROR: Present #016 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 017').then(row => 
								{
									if (!row)
									{
										let pstring17 = ('ERROR: Present #017 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring17 = ('#0' + row.number + ': ' + row.name + ' (x' + amount17 + ')');
										}
										else
										{
											let pstring17 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring17 =  ('ERROR: Present #017 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 018').then(row => 
								{
									if (!row)
									{
										let pstring18 = ('ERROR: Present #018 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring18 = ('#0' + row.number + ': ' + row.name + ' (x' + amount18 + ')');
										}
										else
										{
											let pstring18 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring18 =  ('ERROR: Present #018 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 019').then(row => 
								{
									if (!row)
									{
										let pstring19 = ('ERROR: Present #019 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring19 = ('#0' + row.number + ': ' + row.name + ' (x' + amount19 + ')');
										}
										else
										{
											let pstring19 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring19 =  ('ERROR: Present #019 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								sql.get('SELECT * FROM presentdata WHERE number = 020').then(row => 
								{
									if (!row)
									{
										let pstring20 = ('ERROR: Present #020 has not been initialized!');
									}
									else
									{
										if (row.found)
										{
											let pstring20 = ('#0' + row.number + ': ' + row.name + ' (x' + amount20 + ')');
										}
										else
										{
											let pstring20 = ('#0' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										let pstring20 =  ('ERROR: Present #020 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								message.reply(pstring1 + '\n' + pstring2 + '\n' + pstring3 + '\n' + pstring4 + '\n' + pstring5 + '\n' + pstring6 + '\n' + pstring7 + '\n' + pstring8 + '\n' + pstring9 + '\n' + pstring10 + '\n' + pstring11 + '\n' + pstring12 + '\n' + pstring13 + '\n' + pstring14 + '\n' + pstring15 + '\n' + pstring16 + '\n' + pstring17 + '\n' + pstring18 + '\n' + pstring19 + '\n' + pstring20);
								
							break;
