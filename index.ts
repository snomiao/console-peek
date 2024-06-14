export function consolePeek<T extends Promise<any> | any>(val: T): T {
  (async function () {
    if (val instanceof Promise) {
      console.log(await val);
    } else {
      console.log(val);
    }
  })();
  return val;
}
