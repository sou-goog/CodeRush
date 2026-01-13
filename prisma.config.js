const fs = require('fs');
const path = require('path');

// Try loading .env manually if dotenv fails or isn't present
const envPath = path.resolve(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envConfig = require('dotenv').config({ path: envPath });
}

if (!process.env.DATABASE_URL) {
    console.error('Error: DATABASE_URL is not set in environment variables.');
    console.error('Current env vars:', Object.keys(process.env));
    process.exit(1);
}

module.exports = {
    datasource: {
        url: process.env.DATABASE_URL,
    },
};
