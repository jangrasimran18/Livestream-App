// server.js

const overlaysRouter = require('./overlays'); // Import your overlay route
const settingsRouter = require('./settings'); // Import your settings route

app.use('/api/overlays', overlaysRouter); // Mount overlays route
app.use('/api/settings', settingsRouter); // Mount settings 


// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use your desired port

app.use(express.json()); // Parse JSON request bodies

// Add your CRUD routes and controllers here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
