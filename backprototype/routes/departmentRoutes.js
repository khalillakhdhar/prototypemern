const express = require('express');
const { addDepartment, getAllDepartments, getDepartmentById, updateDepartment, deleteDepartment } = require('../controllers/departmentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Routes protégées par le middleware d'authentification
router.post('/', authMiddleware, addDepartment); // Ajouter un nouveau département
router.get('/', authMiddleware, getAllDepartments); // Obtenir tous les départements
router.get('/:id', authMiddleware, getDepartmentById); // Obtenir un département par ID
router.put('/:id', authMiddleware, updateDepartment); // Mettre à jour un département
router.delete('/:id', authMiddleware, deleteDepartment); // Supprimer un département

module.exports = router;
