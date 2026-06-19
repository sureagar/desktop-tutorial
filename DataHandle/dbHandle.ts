import mysql from 'mysql2'; // for new authonticaiton methods

let myDb = mysql.createConnection({
    host: 'localhost', //database host (server)
    user: 'root', //database user
    password: 'VibeTestQ', //database password
    database: 'company', //database name
    port: 3306 //database port number
});

// Connect to the database
myDb.connect((err) => {
    console.log('Connected to the database!');
    // Execute a query to fetch data from the database
    myDb.query('SELECT * FROM emp', (err, results) => {
        
        console.log('Query results:', results);
        // Close the database connection
        myDb.end();
        console.log('Database connection closed.');
    });
});