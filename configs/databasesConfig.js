require('dotenv').config()
const IN_PROD = process.env.NODE_ENV === 'production'

const databasesConfig = {

	//MongoDB Database Config
	MONGODB_URI: `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?${process.env.MONGO_OPTION}`,

	MONGODB_OPTIONS: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}


}
module.exports = databasesConfig