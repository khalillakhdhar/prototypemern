const express = require('express');
const { addEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Routes protégées par le middleware d'authentification
router.post('/', authMiddleware, addEmployee); // Ajouter un nouvel employé
router.get('/', authMiddleware, getAllEmployees); // Obtenir tous les employés
router.get('/:id', authMiddleware, getEmployeeById); // Obtenir un employé par ID
router.put('/:id', authMiddleware, updateEmployee); // Mettre à jour un employé
router.delete('/:id', authMiddleware, deleteEmployee); // Supprimer un employé

module.exports = router;
