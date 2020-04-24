export type PathModeFunction = (path: string) => Promise<boolean>

/**
Check if a path is readable.
@param path The path to check.
*/
export const isReadable: PathModeFunction

/**
Check if a path is writable.
@param path The path to check.
*/
export const isWritable: PathModeFunction

export type PathModeSyncFunction = (path: string) => boolean

/**
Synchronously check if a path is readable.
@param path The path to check.
*/
export const isReadableSync: PathModeFunction

/**
Synchronously check if a path is writable.
@param path The path to check.
*/
export const isWritableSync: PathModeSyncFunction
