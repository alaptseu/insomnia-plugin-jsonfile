const fs = require('fs');
const editJsonFile = require("edit-json-file");

module.exports.templateTags = [
    {
        name: 'jsonfile',
        displayName: 'JSON File',
        description: 'read json contents from a file',
        args: [
            {
                displayName: 'Choose JSON File',
                type: 'file',
            }
        ],
        run(ctx, path) {
            if (!path) {
                throw new Error('No JSON file selected');
            }
            const json_values = ctx.context.json_property;
            if (!json_values) {
                return  fs.readFileSync(path, 'utf8');
            }
            let file_content = editJsonFile(path);
            console.log(`File content before setting up values:`);
            console.log(file_content.get());
            for (const key of Object.keys(json_values)) {
                const value = json_values[key];
                console.log(`Processing key: ${key} with value: ${value}`);
                file_content.set(key, value);
            }
            console.log(`File content after setting up values:`);
            console.log(file_content.get());
            return JSON.stringify(file_content.get());
        },
    },
];