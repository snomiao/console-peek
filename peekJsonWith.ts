
export const peekJsonWith = (field?: string | number) => <T extends Promise<any> | any>(
  val: T,
  log = (val: any) => console.log(JSON.stringify(val).trim())
): T => {
  (async function () {
    if (field !== undefined) {
      if (val instanceof Promise) {
        log({ [field]: await val });
      } else {
        log({ [field]: val });
      }
    } else if (val instanceof Promise) {
      log(await val);
    } else {
      log(val);
    }
  })();
  return val;
};
