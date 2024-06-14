export function peekLog<T extends Promise<any> | any>(
  val: T,
  log = console.log.bind(console)
): T {
  (async function () {
    if (val instanceof Promise) {
      log(await val);
    } else {
      log(val);
    }
  })();
  return val;
}
