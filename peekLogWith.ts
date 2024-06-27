export const peekLogWith =
  (topic?: any, log = (...args: any[]) => console.log(args)) =>
  <T extends Promise<any> | any>(val: T): T => {
    (async function () {
      if (topic !== undefined) {
        if (val instanceof Promise) {
          log(topic, await val);
        } else {
          log(topic, val);
        }
      } else if (val instanceof Promise) {
        log(await val);
      } else {
        log(val);
      }
    })();
    return val;
  };
