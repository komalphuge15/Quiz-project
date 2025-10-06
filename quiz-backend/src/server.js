import app from './app.js';
import sequelize from './models/index.js';

const PORT = 5000;

const startServer = async () => {
  try {
    await sequelize.sync(); 
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer();
