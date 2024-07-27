const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// Conectar a MongoDB
mongoose.connect('mongodb+srv://<eduardsfonseca>:<3zYrDStiylUiZw5M>@cluster0.mongodb.net/yourDatabaseName?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Definir esquema y modelo
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

app.use(express.json());

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
