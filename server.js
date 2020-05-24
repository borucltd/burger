const mysql = require('mysql');
const express = require('express');
const connection = require('./db/config/connection');


async function main () {

    
    const parameters = connection.connection;
    try {
        const makeConnection = await connection.connect(parameters);
        console.log(makeConnection);
    } catch(error) {
        console.log(error);
    }
    
    try {
        
    const res = await connection.query('SELECT * FROM burgers ;' , mysql.raw('burger'),connection.connection);
        console.log(res);
    } catch(error) {
        console.log(error);

    }
    
    
    
    
}


main();
