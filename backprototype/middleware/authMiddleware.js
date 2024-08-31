const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Récupérer le token à partir des en-têtes de la requête
  const token = req.header('Authorization')?.split(' ')[1]; // Exemple: "Bearer token"

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé. Aucun token fourni.' });
  }

  try {
    // Vérifier et décoder le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Stocker les informations de l'utilisateur dans la requête
    next(); // Passer au middleware suivant ou au contrôleur
    
  } catch (error) {
    res.status(400).json({ message: 'Token invalide.' });
  }
};

module.exports = authMiddleware;
