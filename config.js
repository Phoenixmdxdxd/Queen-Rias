const fs = require("fs");
require("dotenv").config();

let config = {
    prefix: process.env.PREFIX || "+",
    ownerName: process.env.OWNER_NAME || "𝑆𝑡𝑒𝑝ℎ𝑒𝑛 𝑁𝑖𝑐ℎ𝑜𝑙𝑎𝑠 𝐴𝑙𝑙𝑖𝑠𝑜𝑛",
    ownerNumber: process.env.OWNER_NUMBER || "2349051080824",
    mode: process.env.MODE || "private",
    region: process.env.REGION || "Nigeria",
    botName: process.env.BOT_NAME || "𝐑𝐢𝐚𝐬✨",
    exifPack: process.env.EXIF_PACK || "𝐑𝐢𝐚𝐬 𝐆𝐫𝐞𝐦𝐨𝐫𝐲",
    exifAuthor: process.env.EXIF_AUTHOR || "𝑴𝒂𝒅𝒆 𝑩𝒚 𝐴𝑙𝑙𝑖𝑠𝑜𝑛",
    timeZone: process.env.TIME_ZONE || "Africa/Lagos",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ?.toLowerCase() === "false" || false,
    autoViewStatus: process.env.AUTO_VIEW_STATUS?.toLowerCase() === "true" || false,
    autoReact: process.env.AUTO_REACT?.toLowerCase() === "true" || false,
    sessionId: process.env.SESSION_ID || "https://session-toxxictech.zone.id/download-session?id=hH7E",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED?.toLowerCase() === "true" || false,
    antiDelete: process.env.ANTIDELETE?.toLowerCase() === "true" || false,
    sessionSite: process.env.SESSION_SITE || 'https://session-toxxictech.zone.id/download-session?id=hH7E',    
    menuType: process.env.MENU_TYPE || 1  // 1 = Image, 2 = Video
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`🔥 Update detected in '${__filename}', reloading Rias Gremory's config...`);
    delete require.cache[file];
    config = require(file);
});

module.exports = config;
