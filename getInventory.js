case 'getInventory':
				const row = await sql.get("SELECT * FROM presents WHERE userId = " + message.author.id);
				if (!row) 
				{
					message.reply('ERROR: This user has not been initialized!');
					return;
				}
				switch(parts[1]) 
				{	
					case '1':
						const presents = [];

						for (let i = 1; i <= 20; i++) 
						{
							const current = await sql.get(`SELECT * FROM presentdata WHERE number = ${i}`);
						
							if (i < 10)
							{
								if (current && current.found) 
								{
									presents.push(`#00${current.number}: ${current.name} (x${row[`p${i}`]})`)
								} 
								else 
								{
									presents.push(`#00${current.number}: ??? (x0)`)
								}
							}
							else //if i is two digits
							{
								if (current && current.found) 
								{
									presents.push(`#0${current.number}: ${current.name} (x${row[`p${i}`]})`)
								} 
								else 
								{
									presents.push(`#0${current.number}: ??? (x0)`)
								}
							}
						}
						message.reply(presents.join("\n"));
					break;
				}
            break;
