const test = require("ava")
const { isReadable, isWritable, isReadableSync, isWritableSync } = require(".")

test("main", async t => {
	t.true(await isReadable("package.json"))
	t.true(await isWritable("package.json"))
	t.true(isReadableSync("package.json"))
	t.true(isWritableSync("package.json"))
})
