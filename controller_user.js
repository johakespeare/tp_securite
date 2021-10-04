const mysql = require('mysql');
const DB_HOST = "localhost"
const DB_USER = "root"
const DB_PASS =""
const DB_NAME ="tp_securite"


// Connection à la bdd
const db = mysql.createConnection({

    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database : DB_NAME

});

exports.form = (req, res) => {
    res.render('inscription');
}


// Add new user
exports.create = (req, res) => {
    const { nom_user, prenom_user,adr_user, mail_user, tel_user, psw_user, description } = req.body;
    // User the connection
    db.query('INSERT INTO users SET nom_user = ?, prenom_user = ?, mail_user = ?, tel_user = ?, adr_user = ? , psw_user = ? , description = ?', [nom_user, prenom_user, mail_user, tel_user, adr_user, psw_user ,description], (err, rows) => {
        if (!err) {
            res.render('inscription', { alert: 'Vous êtes bien inscrit' });
        } else {
            console.log(err);
        }
        console.log('The data from user table: \n', rows);
    });
}