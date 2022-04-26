export const config = {
    dbUrl: 'mongodb+srv://admin:movO1j1e9Ha0bJbG@cluster0.kc7c6.mongodb.net/directory-app?retryWrites=true&w=majority',
    serverPORT: process.env.PORT,
    secrets: {
        jwt: 'moonrock',
        jwtExp: '100d'
    },
    cors: { // Si quisieramos pasar las opciones de cors manualmente...
        "origin": "*",
        "methods": ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        "allowedHeaders": ['Accept', 'Authorization', 'Content-type'],
        "credentials": true,
        "isAllowedCredentialsEnabled": true,
        "preflightContinue": false
    }
}