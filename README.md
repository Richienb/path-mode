# path-mode [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/path-mode/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/path-mode)

Check the permissions for a file path.

[![NPM Badge](https://nodei.co/npm/path-mode.png)](https://npmjs.com/package/path-mode)

## Install

```sh
npm install path-mode
```

## Usage

```js
const {isWritable} = require("path-mode");

(async () => {
	console.log(await isWritable('package.json'));
	//=> true
})();
```

## API

### isReadable(path)

Check if a path is readable.

#### path

Type: `string`

The path to check.

Returns a `Promise<boolean>`.

### isWritable(path)

Check if a path is writable.

Returns a `Promise<boolean>`.

### isReadableSync(path)

Synchronously check if a path is readable.

Returns a `boolean`.

### isWritableSync(path)

Synchronously check if a path is writable.

Returns a `boolean`.
