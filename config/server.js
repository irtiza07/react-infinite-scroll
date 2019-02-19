module.exports = {
    //If we are deploying it we will put all these in the environment variable in server
    //As a result we can get it through process.env
    APLLICATION_ID: process.env.APLLICATION_ID || 'cbd01366208d9ae7b3862adf4bfe3f68e9a92eb09548897756fcf2c347cd1ccd',
    SECRET: process.env.SECRET || '0343dd8a349241ab5a585144fcbb1a4cb22f4f6297463dff5bbf6aac63e3debb',
    CALLBACK: process.env.CALLBACK || 'http://localhost:3000'
}