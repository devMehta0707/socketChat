const User = require("../models/User");

const emailExist = async (email) => {
	try {
		const result = await User.findOne({
			where: {
				email: email
			}
		})
		return result;
	} catch (error) {
		throw error
	}
}