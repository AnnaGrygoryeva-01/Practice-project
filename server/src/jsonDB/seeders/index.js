const { readdirSync } = require('fs');
const path = require('path');

async function runSeeders(client) {
  const basename = path.basename(__filename);
  const files = readdirSync(path.resolve(__dirname, './'))
    .filter((file) => {
      return file.indexOf('.') !== 0 && (file !== basename) && file.slice(-3) === '.js';
    });

  for (const file of files) {
    try {
      client.getData('/seeders');
    } catch (error) {
      client.push('/seeders', []);
    }

    const seeders = client.getData('/seeders') || [];
    if (seeders.indexOf(file) !== -1) {
      continue;
    }

    // Seeders must run one at a time: each one reloads the db file from disk,
    // so overlapping runs would drop each other's rows.
    await require(path.join(__dirname, './', file))();

    // Only mark the file as seeded once its rows are actually on disk.
    const done = client.getData('/seeders') || [];
    done.push(file);
    client.push('/seeders', done);
  }
}

module.exports = runSeeders;
