import dotenv from 'dotenv'
dotenv.config()

const config = {
    ldap_server: process.env.LDAP_SERVER,
    ldap_port: process.env.LDAP_PORT,
    ldap_user: process.env.LDAP_USER,
    ldap_password: process.env.LDAP_PASSWORD
}

console.log(config)

// Just for testing
const myNumbers = [1, 2, 3, 4]
export function myLogger() {
    console.log(myNumbers)
}