import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from './src/db/schema.ts';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = drizzle(process.env.DATABASE_URL);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await db.insert(usersTable).values({ name, email, message });
    res.status(200).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Failed to save contact.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});