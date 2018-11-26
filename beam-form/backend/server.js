/* eslint no-console: 0 */
// import express from 'express';
// import bodyParser from 'body-parser';
// import mysql from 'mysql';
// import fs from 'fs';
// import path from 'path';
// import node_ssh from 'node-ssh';
var mysql, node_ssh, ssh, bodyParser, express
mysql = require('mysql');
node_ssh = require('node-ssh');
bodyParser = require('body-parser');
express = require('express');
ssh = new node_ssh();
const app = express();
app.use(bodyParser.json());
// const { exec } = require('child_process');
const APP_PORT = 3000

var connection =
mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "GoBears123",
  database: 'beamForm_intake'
});

connection.connect(function(err) {
  if(err){
    console.log(err.code);
    console.log(err.fatal);
  }
  console.log('Connected');
});

app.get('/user/add', function (req, res) {
  const{ username, password, email, coin, signature, address, amount } = req.query
  // const { address } = req.body
  console.log(req.query)
  console.log(req.query.signature)

  // if (counter > 0){
  //   var notCorrect = coin_nodes.pop()
  //   console.log(notCorrect)
  // } else if (counter > 1){
  //   console.log(coin_nodes)
  // } else if (counter > 2){
  //   coin_nodes.pop()
  // }
  ssh.connect({
  host: '178.128.3.233',
  user: 'root',
  password: 'Elnino69$'
  })
  .then((result) => {
    const coin_nodes = [ './graphcoin', 'printex-cli', './galilel-cli', './bulwark-cli'  ]
    const coin_hash = {
      1:'./graphcoin',
      2:'printex-cli',
      3:'./galilel-cli',
      4:'./bulwark-cli'
    }
    for(var counter = 0; counter < coin_nodes.length; counter++  ){
      var commandCoin = coin_nodes[counter]
      console.log('connected to db')
      const bigString = `${commandCoin} verifymessage ${address} ${signature} ""`
      console.log(bigString)

      ssh.execCommand(`${commandCoin} verifymessage ${address} ${signature} ""`).then(function(result) {
        console.log('STDOUT: ' + result.stdout)
        if(result.stdout === 'true'){
          console.log('SQL COMMAND')
          const INSERT_USER_QUERY = `INSERT INTO users_master(username, password, email, coin, address, signature, balance, verified) VALUES ("${username}","${password}","${email}","${coin}","${address}","${signature}", ${amount}, 1)`
          connection.query(INSERT_USER_QUERY, (err, res) => {
            if(err) {
              console.log(err)
            }else {
             console.log('User insertion was potentially unsuccessful')
            }
          })
        } else if (result.stdout === undefined  || result.stdout === 'false' || result.stdout === ' ' ) {
            console.log('this is the command coin',`${commandCoin}`)
        }
      })
    }
  })
});
// exec('printex-cli verifymessage "p6cjLmYz75rcCuJkRrJzUyvRCCfgSsvgb4" "IFQ1A3F7IPtfN2rwVwO5iILp/QvBH1SaD91VqoL5VCU1EvpeXXhnDh4kqAOQ1hwkEX/geopkl3SMH7/Ha1Gqz2k=" ""', (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   console.log(`Value of query ${stdout}`);
// });

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
