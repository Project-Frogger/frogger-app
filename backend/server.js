const express = require('express')
const app = express(),
      bodyParser = require('body-parser');
      port = 3080;

let mysql = require('mysql');
const config = require('./config/database.json');

const events = [];

app.use(
  bodyParser.json(),
);

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password
});

connection.connect(function(err){
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else{
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});


app.get('/api/events', (request, response) => {
  console.log('api/events called!')
  connection.query("CALL `frogger`.`f_get_current_events`()",
  function(err, results, fields) {
    if (err) {
      return console.error("Ошибка извлечения данных: " + err.message);
    }
    else{
      response.json(results);
    }
  });
});

app.get('/api/deleted_events', (request, response) => {
  console.log('api/deleted_events called!')
  connection.query("CALL `frogger`.`f_get_deleted_events`()",
  function(err, results, fields) {
    if (err) {
      return console.error("Ошибка извлечения данных: " + err.message);
    }
    else{
      response.json(results);
    }
  });
});
  
app.post('/api/post_event', (request, response) => {
  console.log('Post even');
});
  
app.get('/', (request, response) => {
  response.send('Get single event');
});
  

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
