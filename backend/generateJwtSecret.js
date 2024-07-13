const crypto = require('crypto');
const fs = require('fs');

const generateSecret = () => {
  return crypto.randomBytes(64).toString('hex');
};

const jwtSecret = generateSecret();
console.log(`Generated JWT Secret: ${jwtSecret}`);

const envContent = `JWT_SECRET=${jwtSecret}\n`;

fs.appendFile('.env', envContent, (err) => {
  if (err) {
    console.error('Error writing to .env file:', err);
  } else {
    console.log('.env file updated with JWT_SECRET');
  }
});
