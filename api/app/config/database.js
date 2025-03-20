import mysql from 'mysql';

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'db',  // ✅ Utilise "db" (nom du service MySQL)
    port: 3306,
    user: 'root',      
    password: 'root',  
    database: 'api_docker'
}); 

// Connexion à MySQL
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à MySQL', err);
        return;
    }
    console.log('Connecté à MySQL');
});

export { db };