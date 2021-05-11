const createVideos = `CREATE TABLE videos (
  id       SERIAL PRIMARY KEY,
  title     VARCHAR(250) NOT NULL,
  link  VARCHAR(400) NOT NULL,
  likes     integer default 0
);`;
