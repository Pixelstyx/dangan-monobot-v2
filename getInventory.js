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

								pstring1 = "";
								pstring2 = "";
								pstring3 = "";
								pstring4 = "";
								pstring5 = "";
								pstring6 = "";
								pstring7 = "";
								pstring8 = "";
								pstring9 = "";
								pstring10 = "";
								pstring11 = "";
								pstring12 = "";
								pstring13 = "";
								pstring14 = "";
								pstring15 = "";
								pstring16 = "";
								pstring17 = "";
								pstring18 = "";
								pstring19 = "";
								pstring20 = "";

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
											pstring1 = ('#00' + row.number + ': ' + row.name + ' (x' + amount1 + ')');
										}
										else
										{
											pstring1 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										pstring1 =  ('ERROR: Present #001 has not been initialized!');
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
											pstring2 = ('#00' + row.number + ': ' + row.name + ' (x' + amount2 + ')');
										}
										else
										{
											pstring2 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										pstring2 =  ('ERROR: Present #002 has not been initialized!');
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
											pstring3 = ('#00' + row.number + ': ' + row.name + ' (x' + amount3 + ')');
										}
										else
										{
											pstring3 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										pstring3 =  ('ERROR: Present #003 has not been initialized!');
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
											pstring4 = ('#00' + row.number + ': ' + row.name + ' (x' + amount4 + ')');
										}
										else
										{
											pstring4 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										pstring4 =  ('ERROR: Present #004 has not been initialized!');
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
											pstring5 = ('#00' + row.number + ': ' + row.name + ' (x' + amount5 + ')');
										}
										else
										{
											pstring5 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										pstring5 =  ('ERROR: Present #005 has not been initialized!');
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
											pstring6 = ('#00' + row.number + ': ' + row.name + ' (x' + amount6 + ')');
										}
										else
										{
											pstring6 = ('#00' + row.number + ': ??? (x0)');
										}
									}
								}).catch(err => 
								{
									console.error(err);
									sql.run("CREATE TABLE IF NOT EXISTS presentdata (number INTEGER, name TEXT, desc TEXT, found BOOLEAN, like1 DOUBLE, like2 DOUBLE, like3 DOUBLE, like4 DOUBLE, like5 DOUBLE, like6 DOUBLE, like7 DOUBLE, like8 DOUBLE, like9 DOUBLE, like10 DOUBLE, like11 DOUBLE, like12 DOUBLE, like13 DOUBLE, like14 DOUBLE, like15 DOUBLE, like16 DOUBLE)").then(() => 
									{
										pstring6 =  ('ERROR: Present #006 has not been initialized!');
										message.reply ('Table presentdata created.');
									});
								});
