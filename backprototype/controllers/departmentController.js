const Department = require('../models/Department');

// Ajouter un nouveau département
exports.addDepartment = async (req, res) => {
  try {
    const newDepartment = new Department(req.body);
    const department = await newDepartment.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir tous les départements
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find().populate('managerId', 'firstName lastName');
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un département par ID
exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id).populate('managerId', 'firstName lastName');
    if (!department) return res.status(404).json({ message: 'Département non trouvé' });
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un département
exports.updateDepartment = async (req, res) => {
  try {
    const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDepartment) return res.status(404).json({ message: 'Département non trouvé' });
    res.status(200).json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un département
exports.deleteDepartment = async (req, res) => {
  try {
    const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
    if (!deletedDepartment) return res.status(404).json({ message: 'Département non trouvé' });
    res.status(200).json({ message: 'Département supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
