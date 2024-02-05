import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//   console.log("Apagada");
// });

sql`
CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  duration INTERVAL
);

`.then(() => {
  console.log("Tabela Criada");
});
