const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VVy46jRhT9lah2UVtjHsaApZaCaYwBu23aTzqaRQEFLsCAiwIbj3oxWWWRL8gmkaLsoow0y8h/M6usnE+IcHfPzCKZdFgVVVe3zj3n3FtvQJrhAlmoBr03ICe4ghQ1S1rnCPRAvwwCREAL+JBC0ANjK51Z3HApltGg0Jxgo3uDmeseMOPK3c2oHNzYy3q91JmBdg0eWiAv3QR7X0i44Dy1z5nLO0ZRR3QJ62jZlvfilj8cb/IFll3dH1RYFLfr8Bo8NBkhJjgNtXyDtojAxEL1FGLyMvhQw4mLxUJfJ+0yN5xxsemyh/HNvOqaW3E+il0a9zvYXuidl8Gn1gzVlEapvs0OsRhiy9l5V8PatYmqsUI+cFLkDoydulk8wi9wmCLf8FFKMa1fzLuthO4+n+CriolLohMyGSk2qXfmamIppbge306N9bBtMOv4ZcAj08uUfX81UvXxvF2642mVs9VKhSndHefCKuX1oLxPuPbe+xz4lDx7Jf4/vHOTdsmKondn6SNtrirmJBJK3xTWQWa7wSGIZBxFEzqwGOll8EdunehcZQ7RvWE7cyyIeL+KjMQSl7zBGWkaGNq9s3bqO+kTfEhL8iWUW92czMLt7dScCJog3myZrSS5t0hhVtzMcyYzo6rK7tRT+5Iw9ePRGGbdBSljnU24FT9d1e31oEqi1LJu5GHHnRdYFBXl+lJRjGrDBz32oQUICnFBCaQ4Sy97HNsC0K9myCOIXugF85V5r5j7Qz65w8eMdQps19pmfCV0ZgvluEF9AXppjELOlq5BC+Qk81BRIH+IC5qReoyKAoaoAL1vX7dAig70UbjmOp5tgQCTgi7SMk8y6D+r+nwIPS8rUzqrU09tFoiAHvNpG1GK07BoeCxTSLwNrpC6gbQAvQAmBfpYISLIBz1KSvSxa9XMb4iX1+yNKtzYoAW2F0GwD3pAYGRekDsiz4g9nv+meLVvssI8f5UiCloguUSxEidKQpfpMBIvCWwT2Ry0QAqbXOB8+u18enc+vT+ffj2ffj+f/jif3n11Pn3/4e2Pf/7y/sN3P3/9108/nBpNnipqAPiIQpwUoAfU0XEcRZ4dVSg6KI6jzBTFUpSG5WcGnq30KFXkFVo0nI+5RLNGk6BUR/0Q00WeQYvpiorvxVd3ES9pezv8pySgB/gpKwXLKdMNtZJbxOZ60LkfdiovFq1J4s72namsDxlXlifm4n63H7NLGXFSHawOC8Nk68GuUvvqcRevrpJ8xYTDka5XF9+1gI8q7KHPL5sdjgPFFlBE5VpcL/dw0+mo92ylV/KeeLZm2iNNL7R2Nh2jhaQ7nc5S2LCHMqHMbhcXtnl0+5rjHXZl2ZGFUIdEWzyb/NJkydNwwxf7Ndo2vwFGl1nxpNJ/af2Iu3Ek89D6LMXT8PmXBu47/KhvHJjjbX6n4mMqhnjvGGRpQR3TSbkfrs1p7Mjt/lgzwMPD6xbIE0iDjGybtyH1SXZxEsnKxuJGGmRfuExVFoYWPhaewIIqn9pmjreooHCbgx4rCrzEiGK3+xg1JVk+hMUG9EC65ftu0wK1kuczCulzEwKl+QZcAB7+Bo5GA6SgBwAA',
    PREFIXE: process.env.PREFIX || "🧛",
    OWNER_NAME : process.env.OWNER_NAME || "ＬＯＲＥＮＺＯ （ず飲゠)🌼",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "50935947307",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || 'ＬＯＲＥＮＺＯ -XMD v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
    AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'no',
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'no',
    ANTIBAD: process.env.ANTIBAD || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
