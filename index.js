"use strict"

const fs = require("fs")

const assertString = value => {
	if (typeof value !== "string") {
		throw new TypeError("A string must be provided!")
	}
}

const pathMode = async (mode, filepath) => {
	assertString(filepath)

	try {
		await fs.promises.access(filepath, mode)
		return true
	} catch (_) {
		return false
	}
}

const pathModeSync = (mode, filepath) => {
	assertString(filepath)

	try {
		fs.accessSync(filepath, mode)
		return true
	} catch (_) {
		return false
	}
}

exports.isReadable = pathMode.bind(null, fs.constants.R_OK)
exports.isReadableSync = pathModeSync.bind(null, fs.constants.R_OK)
exports.isWritable = pathMode.bind(null, fs.constants.W_OK)
exports.isWritableSync = pathModeSync.bind(null, fs.constants.W_OK)
