const md5 = require('md5')
const db = require('../../db/db')

module.exports.signup = (req, res)=>{
    const body = req.body
    let sql = 'select * from ACCOUNT'
    db.query(sql, [], (err, response)=>{
        if(err) console.log(err)
    })
    console.log(req.body)

    res.json('hihi')

}