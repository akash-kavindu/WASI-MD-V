//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94774155386";
global.sudo = process.env.SUDO || "94774155386";
global.owner = process.env.OWNER_NUMBER || "94774155386";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JIazhMa0ZWTHZUcWF2bnM3WEtEWmQ0aTJsak5ObjRQK3NpMUdzZFJuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU90cGdremorMmFrSVkwRGdOSzdoQ2Fwb0dWbmtqTks2YWpkOUp1elJpND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SHB0Q2Z2ZWl3ZVhHK2hhQlBvNjE4OGFwUWF6RGd2RFpNTjlYdUlzNGxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnYWhUZ0lXR0tzWmJtbzJQeTB3cXV0VTUxNzkvT3kzekZNVjVBZmMrbzJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMbmJtN3hKdHF5TDhJMWI4VzM2VEVXNjVzeGhOVWhUZTZLZ1UwMGlna289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9hcDZRaVJ5NGVNYWtDSUlDaEF5aC9YeGE0WjF6cXlLVUVZVHJmQnpzam89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pjU3hZMlJNbUptWGowZDhFVGxjbndFYmQ0M0hSWEoyLzh0VW5UOGZXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWNtc3NKdk1lMTA1aElEcnNUTHRrbkFhSklDaXpFdStXYkVYcGNFMmlXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM0M2thQzB1eUw3aVdqVTVEQnJGaFZDWHFPd3pWenpuWG9hWU0xamxWd1FhZTJPV3hnZkdFSnZva3NqVXVxZzFPL2xLbUhVc21acU1WQ2RHQ1QzYkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IjNwdGE2b3l1cmJSdWpUQWlqbHM0MW52MzUvTHVPZGtFbm5tNWw4MW00WE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjUwWmJZYmRFUU5HdEhvVWlUUHVTT3ciLCJwaG9uZUlkIjoiY2I3ZGZlYmYtOWJlYi00ZDJmLWIzZmMtNjg2ZmIwNzllYjYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJRRmZRS2Y3K09mQTV1K1lUcFYxcTk3RmE3QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzWC9YZDh2bXFzOTFGV3I1MmRhZmpoMDhqeTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlgxM0JKU0QiLCJtZSI6eyJpZCI6Ijk0Nzc0MTU1Mzg2OjIxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQMlYvcU1GRVB6MnJya0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3TUZHeEx3SzNLTEhKNnpxbk1INWRjNStIUHRFd3lmMVgyMlhtajg2a1VFPSIsImFjY291bnRTaWduYXR1cmUiOiJrSllubFdxcUdyakRQSXVIeWlNZFZDWjIzTXZKNzBRMFpHZm4wR0JZQmlmdEFVK3ErOFVRU2JRZ283dUlDOUJtQzFSZWxhTmh0T0oyLzl1elFYeHVDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVXRIZ3dySEVId0ZLUVYvZzlnMDMxYUNXcCtQUW90d1RTQ2J4RnkybzRmYVVUV0VJb2V0dmtvUCtld3kwUUg2V2FyVXRFWmxpVTBmTmpiMkhCSUVxQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDE1NTM4NjoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjREJSc1M4Q3R5aXh5ZXM2cHpCK1hYT2ZoejdSTU1uOVY5dGw1by9PcEZCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwOTE5MzA1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNkRiJ9":
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdXUmRMcHBVSFRDV2wzVDJTbzBWb1hTTEE4UmdzZXVFL3JiR3hobERIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpLaGFYU3YvM3VLb1FIcXJER1ZaQnNHY1VXem9zSC9XTWpEbHFjRzJ4ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwR2xVb0tmQ0h6a24vVWF6QWJOUG9tMG83R1VZR3lKTFpocVZ0UWxRcDAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMFg1WnZhbitVT3lSVDhFMng2MGFEV0FGSWlmNlFSM1A2V05ROXNrVTBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHUis5SGdDeFh4VlBBN3lVM0JJTVRGMWp3MUo3dlQyNG1WTFI0dWpkazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ingyc2FoV3NyU0l6UDd4SHFGWkN3RlAxbFpsU3lNRUo0alppeDJHeUxNbnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0U0dys1SXI4RzVFOEJuZnJvTWdlSFpRTWhxZWdDdVN6b1FXVVJBMEwzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEl2cWJDN2p5RFd2Vk0yTmpaVTBkREhYSEJtTmpBKzNmUUVxNE5neStnZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUzeTZZbGQySWhvK0hHVTdUUnk0QmsybTdJcmJLcXRod2k1R054bWlrWmI1L0xvb2hMNXJIT0dQTWVzQkRqS0FhZkhiWlkrbStsN0NPcWc0dWg4K0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IjRweGtVU1d6VDdTNzI2Zk9PU0kxZEtRRjI3NXVzTDdCRGdZdTR4TzNVTkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJFNnFZV191Uk1TYVM1Q3N2azRDSXciLCJwaG9uZUlkIjoiNzZmNDkwZTAtMzI1YS00NWJiLWJjZjYtNTJlNjNjODZkNmNhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpiL1phWU90SHVxNjBHRW9Ia0V2TFZvWTJTTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmQzAwYUVkbkIrOEM2T1ZDMTFFU1Z0R3hzSWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUNYNFFDRzgiLCJtZSI6eyJpZCI6Ijk0NzcxODEwNjk4OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0ouG0gMm04bSb4bSA44Wkyp/JquG0oOG0h+OFpOODpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSi9sbjc0R0VNV0FnYmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic3FrRjhYZjR3NDFIN1lXK3MwMXNsVG9jV25RSmQwcjR4eGJVRXlHYjdEMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUy8rNFJIODBaVE1DWGtJN2pSMmYwdWpGUE9hTUhaaVBJRkh6bklCMXhxdVBaTU9Rd2ZOVlNJOVlwSWR5QjRrdnM4UGIvbGV3b2RzVzZTenFjTENiRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjZmQk5XWlNkTGI0SVVhYzIzVGxicy9nT0UxQ0M0R1k5bGJlNzBKbHpsaEpqQVZLZkV3b2w3YUQzRkozZEZKMWhHUVVBbUM1Zyt0bVpJeHAxeGNORERRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzE4MTA2OTg6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYktwQmZGMytNT05SKzJGdnJOTmJKVTZIRnAwQ1hkSytNY1cxQk1obSt3OSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDE2Njg2Nn0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Zanta bot",
  ownername: process.env.OWNER_NAME || "zanta",
  errorChat: process.env.ERROR_CHAT || "94774155386",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
