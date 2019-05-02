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
            },
            {
                displayName: 'Save changed file content',
                type: 'boolean',
                help: 'If this is enabled, original file content will be saved.',
                defaultValue: false,
            }
        ],
        run(ctx, path, toSave) {
            console.log(`File is: ${path}`);
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
            if (toSave) {
                file_content.save();
                console.log(`File content is saved ...`);
            }
            console.log(`File content after setting up values:`);
            console.log(file_content.get());
            return JSON.stringify(file_content.get());
        },
    },
];