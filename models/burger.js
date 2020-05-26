const orm = require('../config/orm');

const burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(col1, col2, new_b, is_d, cb) {
        console.log(new_b);
        orm.insertOne("burgers", col1, col2, new_b, is_d, function(res) {
            cb(res);
        });
    },
    updateOne: function(col2, is_d, col1, bur_n, cb) {
        orm.update("burgers", col2, is_d, col1, bur_n, function(res) {
            cb(res);
        });
    }
};



module.exports =  burger

