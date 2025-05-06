/*
  # Initial schema setup for portfolio backend

  1. Tables
    - blogs
      - id (uuid, primary key)
      - title (text)
      - content (text)
      - tags (text[])
      - created_at (timestamp)
      - user_id (uuid, foreign key)
    
    - contact_messages
      - id (uuid, primary key)
      - name (text)
      - email (text)
      - subject (text)
      - message (text)
      - created_at (timestamp)
      - read (boolean)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin access
*/

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies for blogs
CREATE POLICY "Allow public read access to blogs"
  ON blogs
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage their blogs"
  ON blogs
  USING (auth.uid() = user_id);

-- Policies for contact messages
CREATE POLICY "Allow public to create contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update contact messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true);