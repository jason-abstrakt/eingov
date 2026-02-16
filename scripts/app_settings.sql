-- Optional: run in Neon (or any Postgres) to persist home page mode site-wide.
-- Then GET/POST /api/settings/home-mode will read/write this table.

CREATE TABLE IF NOT EXISTS app_settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

INSERT INTO app_settings (key, value) VALUES ('home_mode', 'ein')
ON CONFLICT (key) DO NOTHING;
