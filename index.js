const fs = require('fs');

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
        run(context, path) {
            if (!path) {
                throw new Error('No file selected');
            }

            return fs.readFileSync(path, 'utf8');
        },
    },
];