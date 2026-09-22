require('dotenv').config();

module.exports={
BOT_NAME:process.env.BOT_NAME || 'NZBOT',
STORE_NAME:process.env.STORE_NAME || 'NZSTORE',
ADMIN_NUMBER:process.env.ADMIN_NUMBER || '',
OPEN_TIME:process.env.OPEN_TIME || '08:00',
CLOSE_TIME:process.env.CLOSE_TIME || '00:00'
};
