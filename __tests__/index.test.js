const path = require('path');
const tag = require('..').templateTags[0];

function assertTemplate(args, expected) {
    return async function() {
        const ctx = _getTestContext();
        const result = await tag.run(ctx, ...args);
        expect(result).toBe(expected);
    };
}

function assertTemplateFails(args, expected) {
    return async function() {
        try {
            const ctx = _getTestEmptyContext();
            await tag.run(ctx, ...args);
            fail(`Render should have thrown ${expected}`);
        } catch (err) {
            expect(err.message).toContain(expected);
        }
    };
}

function _getTestContext(){
  return {
      "context": {
          "json_property": {
              "version": "1.0"
          }
      }
  };
}

function _getTestEmptyContext(){
    return {
        "context": {
        }
    };
}

describe('FileExtension', () => {
    const filename = path.resolve(__dirname, path.join('./test.json'));
    const escaped = filename.replace(/\\/g, '\\\\');
    it('reads from string', assertTemplate([escaped], '{"version":"1.0","name":"<NAME>"}'));
    it(
        'fails on missing file',
        assertTemplateFails(
            [process.platform === 'win32' ? 'C:\\foo' : '/foo'],
            `ENOENT: no such file or directory, open '${path.resolve('/foo')}'`,
        ),
    );
    it('fails on no 2nd param', assertTemplateFails([], 'No JSON file selected'));
});