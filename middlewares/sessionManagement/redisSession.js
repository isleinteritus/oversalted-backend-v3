const { sessionConfig } = require( '../../configs/sessionConfig' )
const { dataBasesConfig } = require( '../../configs/dataBasesConfig' )
const Redis = require( 'ioredis' )
const session = require( 'express-session' )
const RedisStore = require( 'connect-redis' )( session )

const client = new Redis( dataBasesConfig.REDIS_OPTIONS )

const test = client.ping( function( error, result ) {
    console.log( 'ping', result )
} )
//TODO look into making the session cookie safer by:
//Using length and random session ID to prevent brute force attack. The recc length is 128 bits
//session ID without user specific data. The data should be a random string of characters without
// meaning HTTPS communication only. No http. Secure and HTTP only cookies. All session cookies
// should be created with secure and HTTP only attributes Manage sessions. Destroy sessions upon
// closing browser, timeout, logout, or log-in from a separate location.
const redisSession = session( {
    ...sessionConfig.SESSION_OPTIONS,
    store: new RedisStore( {
        client
    } )
} )

module.exports = {
    redisSession
}
