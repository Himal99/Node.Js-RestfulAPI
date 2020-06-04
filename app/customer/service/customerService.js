const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
})

function customerService() {
    return {
        findall: function(callback) {
            db.query('select *from tbl_user', (err, data) => {
                callback(data);

            });
        },
        findById: function(id, callback) {
            db.query('select *from tbl_user where id=?', [id], (err, data) => {
                callback(data);

            });
        },
        deleteById: function(id, callback) {
            db.query('delete from tbl_user where id=?', [id], (err, data) => {
                callback(data);

            });
        },
        insert: function(param, callback) {
            var sql = 'insert into tbl_user(name,email,address,phone)' +
                'values(?,?,?,?)';
            db.query(sql, [param.name, param.email, param.address, param.phone], (err, result) => {
                callback(result);
            });
        },
        update: function(param, callback) {
            var sql = 'update tbl_user set name=?,email=?,address=?,phone=?' +
                'where id=?';
            db.query(sql, [param.name, param.email, param.address, param.phone, param.id], (err, result) => {
                callback(result);
            });
        }

    }
}


module.exports = customerService();