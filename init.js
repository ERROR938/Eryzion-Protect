const fs = require('fs');

fs.readdirSync('./modules').forEach((element) => {
    if (!element.endsWith('.js')) {
        fs.readdirSync(`./modules/${element}`).forEach((file) => {
            require(`./modules/${element}/${file}`);
        });
    }
})