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

								let present1 = await sql.get('SELECT * FROM presentdata WHERE number = 001').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #001 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #001 has not been initialized!');
										message.reply('Table presentdata created.');
									});
								});

								if (present1.found)
								{
									pstring1 = ('#00' + present1.number + ': ' + present1.name + ' (x' + amount1 + ')');
								}
								else
								{
									pstring1 = ('#00' + present1.number + ': ??? (x0)');
								}

								let present2 = await sql.get('SELECT * FROM presentdata WHERE number = 002').then(row => 
								{
									if (!row)
									{
										pstring2 = ('ERROR: Present #002 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #002 has not been initialized!');
										message.reply('Table presentdata created.');
									});
								});

								if (present2.found)
								{
									pstring2 = ('#00' + present2.number + ': ' + present2.name + ' (x' + amount2 + ')');
								}
								else
								{
									pstring2 = ('#00' + present2.number + ': ??? (x0)');
								}

								let present3 = await sql.get('SELECT * FROM presentdata WHERE number = 003').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #003 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #003 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present3.found)
								{
									pstring3 = ('#00' + present3.number + ': ' + present3.name + ' (x' + amount3 + ')');
								}
								else
								{
									pstring3 = ('#00' + present3.number + ': ??? (x0)');
								}

								let present4 = await sql.get('SELECT * FROM presentdata WHERE number = 004').then(row => 
								{
									if (!row)
									{
										pstring4 = ('ERROR: Present #004 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #004 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present4.found)
								{
									pstring4 = ('#00' + present4.number + ': ' + present4.name + ' (x' + amount4 + ')');
								}
								else
								{
									pstring4 = ('#00' + present4.number + ': ??? (x0)');
								}

								let present5 = await sql.get('SELECT * FROM presentdata WHERE number = 005').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #005 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #005 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present5.found)
								{
									pstring5 = ('#00' + present5.number + ': ' + present5.name + ' (x' + amount5 + ')');
								}
								else
								{
									pstring5 = ('#00' + present5.number + ': ??? (x0)');
								}

								let present6 = await sql.get('SELECT * FROM presentdata WHERE number = 006').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #006 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #006 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present6.found)
								{
									pstring6 = ('#00' + present6.number + ': ' + present6.name + ' (x' + amount6 + ')');
								}
								else
								{
									pstring6 = ('#00' + present6.number + ': ??? (x0)');
								}

								let present7 = await sql.get('SELECT * FROM presentdata WHERE number = 007').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #007 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #007 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present7.found)
								{
									pstring7 = ('#00' + present7.number + ': ' + present7.name + ' (x' + amount7 + ')');
								}
								else
								{
									pstring7 = ('#00' + present7.number + ': ??? (x0)');
								}

								let present8 = await sql.get('SELECT * FROM presentdata WHERE number = 008').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #008 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #008 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present8.found)
								{
									pstring8 = ('#00' + present8.number + ': ' + present8.name + ' (x' + amount8 + ')');
								}
								else
								{
									pstring8 = ('#00' + present8.number + ': ??? (x0)');
								}

								let present9 = await sql.get('SELECT * FROM presentdata WHERE number = 009').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #009 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #009 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present9.found)
								{
									pstring9 = ('#00' + present9.number + ': ' + present9.name + ' (x' + amount9 + ')');
								}
								else
								{
									pstring9 = ('#00' + present9.number + ': ??? (x0)');
								}

								let present10 = await sql.get('SELECT * FROM presentdata WHERE number = 010').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #010 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #010 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present10.found)
								{
									pstring10 = ('#0' + present10.number + ': ' + present10.name + ' (x' + amount10 + ')');
								}
								else
								{
									pstring10 = ('#0' + present10.number + ': ??? (x0)');
								}

								let present11 = await sql.get('SELECT * FROM presentdata WHERE number = 011').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #011 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #011 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present11.found)
								{
									pstring11 = ('#0' + present11.number + ': ' + present11.name + ' (x' + amount11 + ')');
								}
								else
								{
									pstring11 = ('#0' + present11.number + ': ??? (x0)');
								}

								let present12 = await sql.get('SELECT * FROM presentdata WHERE number = 012').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #012 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #012 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present12.found)
								{
									pstring12 = ('#0' + present12.number + ': ' + present12.name + ' (x' + amount12 + ')');
								}
								else
								{
									pstring12 = ('#0' + present12.number + ': ??? (x0)');
								}

								let present13 = await sql.get('SELECT * FROM presentdata WHERE number = 013').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #013 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #013 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present13.found)
								{
									pstring13 = ('#0' + present13.number + ': ' + present13.name + ' (x' + amount13 + ')');
								}
								else
								{
									pstring13 = ('#0' + present13.number + ': ??? (x0)');
								}

								let present14 = await sql.get('SELECT * FROM presentdata WHERE number = 014').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #014 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #014 has not been initialized!');
										message.reply('Table presentdata created.');
									});
								});

								if (present14.found)
								{
									pstring14 = ('#0' + present14.number + ': ' + present14.name + ' (x' + amount14 + ')');
								}
								else
								{
									pstring14 = ('#0' + present14.number + ': ??? (x0)');
								}

								let present15 = await sql.get('SELECT * FROM presentdata WHERE number = 015').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #015 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #015 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present15.found)
								{
									pstring15 = ('#0' + present15.number + ': ' + present15.name + ' (x' + amount15 + ')');
								}
								else
								{
									pstring15 = ('#0' + present15.number + ': ??? (x0)');
								}

								let present16 = await sql.get('SELECT * FROM presentdata WHERE number = 016').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #016 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #016 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present16.found)
								{
									pstring16 = ('#0' + present16.number + ': ' + present16.name + ' (x' + amount16 + ')');
								}
								else
								{
									pstring16 = ('#0' + present16.number + ': ??? (x0)');
								}

								let present17 = await sql.get('SELECT * FROM presentdata WHERE number = 017').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #017 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #017 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present17.found)
								{
									pstring17 = ('#0' + present17.number + ': ' + present17.name + ' (x' + amount17 + ')');
								}
								else
								{
									pstring17 = ('#0' + present17.number + ': ??? (x0)');
								}

								let present18 = await sql.get('SELECT * FROM presentdata WHERE number = 018').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #018 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #018 has not been initialized!');
										message.reply('Table presentdata created.');
									});
								});

								if (present18.found)
								{
									pstring18 = ('#0' + present18.number + ': ' + present18.name + ' (x' + amount18 + ')');
								}
								else
								{
									pstring18 = ('#0' + present18.number + ': ??? (x0)');
								}

								let present19 = await sql.get('SELECT * FROM presentdata WHERE number = 019').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #019 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #019 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present19.found)
								{
									pstring19 = ('#0' + present19.number + ': ' + present19.name + ' (x' + amount19 + ')');
								}
								else
								{
									pstring19 = ('#0' + present19.number + ': ??? (x0)');
								}

								let present20 = await sql.get('SELECT * FROM presentdata WHERE number = 020').then(row => 
								{
									if (!row)
									{
										message.reply('ERROR: Present #020 has not been initialized!');
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										message.reply('ERROR: Present #020 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});

								if (present20.found)
								{
									pstring20 = ('#0' + present20.number + ': ' + present20.name + ' (x' + amount20 + ')');
								}
								else
								{
									pstring20 = ('#0' + present20.number + ': ??? (x0)');
								}

								message.reply(pstring1 + '\n' + pstring2 + '\n' + pstring3 + '\n' + pstring4 + '\n' + pstring5 + '\n' + pstring6 + '\n' + pstring7 + '\n' + pstring8 + '\n' + pstring9 + '\n' + pstring10 + '\n' + pstring11 + '\n' + pstring12 + '\n' + pstring13 + '\n' + pstring14 + '\n' + pstring15 + '\n' + pstring16 + '\n' + pstring17 + '\n' + pstring18 + '\n' + pstring19 + '\n' + pstring20);
								
							break;
