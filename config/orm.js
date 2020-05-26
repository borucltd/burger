const connection = require('./connection');

// Object Relational Mapper
const orm = {

    selectAll: function(table,cb) {
        const sqlQuery = "SELECT * FROM ??";
        connection.query(sqlQuery, [table], function(error,result) {
            if (error) throw error;
            cb(result);
        })
    },

    insertOne: function(table,column1,column2,new_burger,is_devoured,cb) {
        const sqlQuery = "INSERT INTO ?? (??,??) VALUES (?,?)";
        connection.query(sqlQuery,[table,column1,column2,new_burger,is_devoured], 
            function(error,result) {
                if (erroor) throw error;
                cb(result);
            })
    },

    updateOne: function(table,column2,is_devoured,column1,burger_name,cb) {
        const sqlQuery = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(sqlQuery,[table,column2,is_devoured,column1,burger_name],
            function(error,result) {
                if (error) throw error;
                cb(result);
            })
    }
};

//exports
module.exports = orm 
