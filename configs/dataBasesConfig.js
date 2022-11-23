require( 'dotenv' ).config()

const dataBasesConfig = {
    //MongoDB Database Config
    
    MONGODB_URI: `mongodb+srv://${ process.env.MONGO_USERNAME }:${ encodeURIComponent( process.env.MONGO_PASSWORD ) }@${ process.env.MONGO_HOST }/${ process.env.MONGO_DATABASE }?${ process.env.MONGO_OPTION }`,
    
    MONGODB_OPTIONS: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    
    //Redis Database Config
    // cache \\
    REDIS_OPTIONS: {
        port: +process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        password: process.env.REDIS_PASSWORD
    }
}
module.exports = {
    dataBasesConfig
}
