export function peekLog<T extends Promise<any> | any>(
  val: T,
  topic?: any,
  log = (...args: any[]) => console.log(...args)
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
