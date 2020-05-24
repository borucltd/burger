const connection = require('connection');

// Object Relational Mapper
const orm = {

    selectAll: function(table) {
        const sqlQuery = "SELECT * FROM ??";
        connection.query(sqlQuery,[table], function(error,result) {
            if (error) throw error;
            console.log(result);
        })
    },

    insertOne: function(table,column1,column2,new_burger,is_devoured) {
        const sqlQuery = "INSERT INTO ?? (??,??) VALUES (?,?)";
        connection.query(sqlQuery,[table,column1,column2,new_burger,is_devoured], 
            function(error,result) {
                if (erroor) throw error;
                console.log(result);
            })
    },

    updateOne: function(table,column2,is_devoured,column1,burger_name) {
        const sqlQuery = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(sqlQuery,[table,column2,is_devoured,column1,burger_name],
            function(error,result) {
                if (error) throw error;
                console.log(result);
            })
    }
};

//exports
module.exports = orm 
