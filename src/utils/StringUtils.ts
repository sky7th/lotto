export class StringUtils {
  static format = function (arg: string, ...args: any[]): string {
    for (var k in args) {
      arg = arg.replace(new RegExp("\\{" + k + "\\}", 'g'), args[k]);
    }
    return arg
  }
}
