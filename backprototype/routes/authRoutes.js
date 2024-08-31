const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Routes d'authentification
router.post('/register', registerUser); // Inscrire un nouvel utilisateur
router.post('/login', loginUser); // Connecter un utilisateur

module.exports = router;
