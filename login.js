const { Pool } = require('pg');
const connectionString =
    'postgres://zvdqqhvfawjiec:b6b7246328753cfb402fd5180d6e97c11572e7a9b7d90ff47a42847cbbe07eed@ec2-23-21-4-7.compute-1.amazonaws.com:5432/d4rua75tj9i9of';
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = class Login {
    static init() {
        return pool.query(
            `
                DROP TABLE IF EXISTS login_tab;
                CREATE TABLE login_tab (
                    id SERIAL primary key ,
                    email VARCHAR not null ,
                    password VARCHAR not null 
                    
                );
            `,
        );
    }
 
    static createUser(email,password) {
        return pool.query(
            `
                INSERT INTO login_tab
                (email,password)
                VALUES
                ($1,$2)
            `,
            [email,password],
        );
    }
    static getUser(email,password) {
        return pool.query(
            `
                SELECT email,password
                FROM login_tab
                where email=$1 and password=$2
            `,
            [email,password],
        );
    }
}