
const usersDB = [
	{
		id: 1234,
		name: "Fabio"
	},
	{
		id: 4321,
		name: "Atum"
	}
]

const lookUpID = (id) => {
	return new Promise((resolve, reject) => {
		for (i = 0; i < usersDB.length; i++) {
			user = usersDB[i]
			console.log("User:", user)
			if (user.id == id) {
				resolve(user)
			}
		}

		reject("No user was found.")
	})	
}

module.exports = { lookUpID }