const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const cors = require('cors');

dotenv.config(); // Charger les variables d'environnement

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connecter à MongoDB
connectDB();

// Utiliser les routes
app.use('/api/employees', require('./routes/employeeRoutes'));
app.use('/api/departments', require('./routes/departmentRoutes'));
app.use('/api/auth', require('./routes/authRoutes')); // Routes d'authentification

// Démarrer le serveur
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
