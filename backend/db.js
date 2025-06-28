const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://Elie_Sum_platform_owner:npg_7nMy5HKqDCec@ep-proud-mud-a80c100t-pooler.eastus2.azure.neon.tech/Elie_Sum_platform',
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
