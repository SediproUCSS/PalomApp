const mysql = require('mysql');
connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password:'',
database: 'sedipro_palomapp'
});

let objetosperdidosModel ={}
objetosperdidosModel.getObjetosPerdidos=(callback)=>{
  if (connection) {
    connection.query('select * from ....',
    (err,rows)=>{
      if (err) {
        throw err;


      }else {
        callback(null,rows);
      }
    }
  )
  }
};


module.exports = objetosperdidosModel;