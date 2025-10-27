CREATE TABLE medications (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  dosage TEXT,
  instructions TEXT
);

INSERT INTO medications (name, dosage, instructions)
VALUES
  ('Lisinopril', '10mg', 'Take once daily'),
  ('Metformin', '500mg', 'Take with meals'),
  ('Atorvastatin', '20mg', 'Take at night');
