const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const session = require('express-session');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "some secret",
    // cookie: { maxAge: 30000 },
    saveUninitialized: false,
    resave: true
  })
);

app.post('/reminderToDb' , (req,res)=>{
  
  const { inquiryId, Date, nextDate } = req.body;

  // Insert data into the 'reminder' table
  const insertQuery = `INSERT INTO reminder (inquiryId, reminderDate, nextReminderDate) VALUES (?, ?, ?)`;
  connection.query(insertQuery, [inquiryId, Date, nextDate], (err, result) => {
    if (err) {
      console.error('Error saving reminder:', err);
      res.status(500).json({ error: 'Failed to save reminder.' });
    } else {
      console.log('Reminder saved with ID:', result.insertId);
      res.json({ id: result.insertId }); // Sending the auto-generated ID back to React
    }
  });

});

app.post('/torToDatabase' , (req,res)=>{

  const inquiryId = req.body.inquiryId;
  console.log( "inquiury id  " + inquiryId);
  const tors = req.body.data;
  console.log(tors);
  

  tors.forEach((item) => {
    const { title, findings } = item;
    const insertQuery = `INSERT INTO tors (inquiryId, title, findings) VALUES (?, ?, ?)`;
    const values = [inquiryId, title, findings];

    connection.query(insertQuery, values, (error, result) => {
      if (error) {
        console.error('Error inserting data into database:', error);
      } else {
        console.log('Data inserted successfully:', result);
        // res.send('Data inserted into database successfully');
      }
    });
  });

  res.send('Data received successfully');

});

app.post('/r', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.designation);
    const username = req.body.username;
    const password = req.body.password;
    const designation = req.body.designation;
    const status = "pending";
    // console.log(connection);
    res.json({ message: 'server : Rcvd Input ' });
    
    const dataToInsert = {
        userName: username,
        password: password,
        designation: designation,
        status : status
    };
      
      const sql = 'INSERT INTO user (userName, password,designation,status) VALUES (?, ?, ?,?)';
      connection.query(sql, [dataToInsert.userName, dataToInsert.password,dataToInsert.designation,dataToInsert.status], (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          return;
        }
      
        console.log('Data inserted successfully:', result);
      });
    

});    
    
app.get('/authorize', (req, res) => {

  const queryStr = "select * from user where status='pending'";
  
  connection.query(queryStr, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/inquiryId' , (req,res)=>{
  const u = "SELECT * from inquiry ORDER BY inquiryId DESC LIMIT 1;";
  
  connection.query(u, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json(results);
    }
  });
});


app.get('/employee-data' ,(req,res)=>{
  const qu = "select * from employee";
  
  connection.query(qu, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json(results);
    }
  });
});

app.post('/login', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    // res.json({ message: 'server : Rcvd Login information' });    

    const username = req.body.username;
    const password = req.body.password;

    const sql = 'SELECT id,userName,designation,status FROM user WHERE userName = ? AND password = ?';
    connection.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      res.json({ message: 'ServerError' });
      return;
    }

    if (result.length === 0) {
      // User not found or invalid credentials
      res.json({ message: 'InvalidCredentials' });
    } else {

      console.log(result[0].id);
      // login -> maintaining sessions 
      
      const userId = result[0].id;
      req.session.userId = {userId};
      console.log(req.session.userId);
      const userName = result[0].userName ;
      const designation = result[0].designation;
      const status = result[0].status;
      if ( status == "accepted"){
        res.status(200).json({ message: 'AuthenticationSuccessful', userId ,userName,designation});
      }
      else{
        res.json({ message: 'UserNotApprovedYet' });
      }

    }
  });

});    

app.post('/authorize/accept', (req,res)=>{

  console.log(req.body.id);
  
  const q = 'update user set status = ? where id = ?';
    
  connection.query(q, ["accepted", req.body.id], (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      res.json({ message: 'ServerError' });
      return;
    }

    if (result.length === 0) {
      res.json({ message: 'UpdateNotPossible' });
    }
    else {
      const id=req.body.id ;
      res.status(200).json({message: 'UserAuthorized' , id });
    }
  });
});

  app.post('/authorize/decline', (req,res)=>{
    const q2 = 'delete from user where id = ?';
    
    connection.query(q2, [ req.body.id], (err, result) => {
      if (err) {
        console.error('Error querying database:', err);
        res.json({ message: 'ServerError' });
        return;
      }

      if (result.length === 0) {
        res.json({ message: 'UpdateNotPossible' });
      }
      else{
        const id = req.body.id ;
        res.json({message: 'UserDeleted' , id});
      }

    });
  });


  app.post('/logout', (req,res)=>{
    
    
    console.log(req.session);
    if (req.session.id) {
      // Destroy the user's session (including userId)
      req.session.destroy((err) => {
        console.log("logout clicked ");
        if (err) {
          console.error('Error destroying session:', err);
          res.status(500).json({ message: 'LogoutFailed' });
        } else {
          // Session destroyed successfully
          res.json({ message: 'logoutSuccess' });
        }
      });
    } 
  });


    



process.on('exit', () => {
  closeDatabaseConnection();
});

// Or, if you are using Express, you can close the connection when the server is shutting down:
app.on('close', () => {
  closeDatabaseConnection();
});








app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
