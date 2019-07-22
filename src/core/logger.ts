import * as ColorLog from "cli-color";

var cError = ColorLog.red.bold;
var cInfo = ColorLog.green.bold;
var cWarn = ColorLog.yellow;
var cPlain = ColorLog.whiteBright;

export let error = (msg: string) => console.log(cError(msg));
export let info = (msg: string) => console.log(cInfo(msg));
export let warn = (msg: string) => console.log(cWarn(msg));
export let plain = (msg: string) => console.log(cPlain(msg));