import "regenerator-runtime";
import "dotenv/config";
import "./db";
import app from "./server";
import './models/Song';
import './models/User';
import './songlist';

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
