const database = require("./src/db/database");

async function run(){
	console.log(database)
	await database()
}

run()