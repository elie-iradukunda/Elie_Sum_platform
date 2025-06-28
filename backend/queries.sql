-- Create table
CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);

-- Insert a new todo
INSERT INTO todos (title, completed) VALUES ('Learn PostgreSQL', false);

-- Select all todos
SELECT * FROM todos;

-- Delete all todos
-- DELETE FROM todos;
