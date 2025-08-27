CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  display_name text NOT NULL,
  role text NOT NULL,
  identity text NOT NULL,
  password_hash text NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS communities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  rules text,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS memberships (
  user_id uuid REFERENCES users(id),
  community_id uuid REFERENCES communities(id),
  role text NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  community_id uuid REFERENCES communities(id),
  author_id uuid REFERENCES users(id),
  visibility jsonb NOT NULL,
  content_richtext jsonb NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
  deleted_at timestamp
);

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  community_id uuid REFERENCES communities(id),
  owner_id uuid REFERENCES users(id),
  title text NOT NULL,
  starts_at timestamp NOT NULL,
  location text NOT NULL,
  fields jsonb,
  created_at timestamp NOT NULL DEFAULT now()
);
