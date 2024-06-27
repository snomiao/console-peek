export function peekLog<T extends Promise<any> | any>(
  val: T,
  topic?: any,
  log = console.log.bind(console)
): T {
  (async function () {
    if (val instanceof Promise) {
      if (topic) log(topic, await val);
      else log(await val);
    } else {
      if (topic) log(topic, val);
      else log(val);
    }
  })();
  return val;
}
