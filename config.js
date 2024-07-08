 //#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255657189863";
global.owner = process.env.OWNER_NUMBER || "255626071177";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhiSnNGd2dHamR6bHpEaWEwenVRYTZ1ZDZOVm1zbVJuZW5ITnExMXoyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmhDa2h4cnhkZkpDTDdOQUVBL2RYcW9RY2pPeElYcDRlTlViMkVFWENIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSVBDZ0FJSlU0Q2N4dlF2RkZSVnpXeG42Q2hqMDIrZ0pnSGRUL2FmR0ZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHa3VCZGdyc21nYjhtaVlXOUpUdDMvaXhoU1hXdkdaRkYxMHdQWXQ5cG1NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPSUl4MVZacmw2RUpwSFZzbFhpSEZZTkNBUklwRmNGTjNZZHAxbnpaMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRvSmNobStlRVJOQTM5WnJhaTFUWVBzdFhBUVl4MXNCb0ZBbjYvR1dpQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEMrTzgyVUFsTUpNWnBlTGxzVVc3TGZZQjlDN1o2RjVzK0x4b21IRllYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid29FTnpEb3M4Z0JVU3ZlaTNmRXB5VnFITFNKVlJWZXVoMmpBbURHWXh3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpmTXpxSERlRlZwOEFhRVd0NzZuTDg0MjhhWlkxSDBjRU10Q3VmTDRKNHRNT3l6M0dvMGo0enQyUGFxRnVyaHdmMjFKRS9RRWFHczRPc3lCV3FzUEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJtOWpQT3FTWFF3WHI2Rno1OUZzcWJxZG5kTGZxeGxUUG5IbmtmOEhLSUhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2SG1JYjVweVFKZXFMTXVVenFCbEVRIiwicGhvbmVJZCI6ImZmMmY2MzMwLTQyZTgtNGI0NS1hMTg1LTU5NGJiYTU5NmE1MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIreWpVUWlLZ0lYSm43d0IyNklnOXo4aHZxMU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUJmV1FldUV0cTk5SDVFMEtYYkJYSzBzYXQ0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhXV1Y0UzlGIiwibWUiOnsiaWQiOiIyNTU2MjYwNzExNzc6NTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0hVSSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1N3L1lRRkVKWGZyTFFHR0NNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidkN3YUlNNjhtV05TT1U4L0N3MTFQeGFnVEdQbkVJRDhTdnJJQVpDcGZBOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaEdHUW9LTTIyTm1TcE1uK1o2WUZIL1NUcS8xT29wZENaZFU3OXB4VnVxRVhUMjBXVnRHZWcwN1BQbmMvRGRrZW9Tbk9vaHhFSEdXM1lPTHJnT1JNRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImhXR3BYaTZBRXBUWmoydkZsMnpTVW0yTnZ4SW1RUitnc3hFTDhCRTVnT0VlbkhNWWJYN05RSFhkYk5OVG5LaktYcVFNa1pBMGlsV3RHTmFrNEQwR0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjI2MDcxMTc3OjU5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ3c0dpRE92SmxqVWpsUFB3c05kVDhXb0V4ajV4Q0EvRXI2eUFHUXFYd1AifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzOTc3MzF9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
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
