import yaml from "yaml";

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

export function peekYaml<T extends Promise<any> | any>(
  val: T,
  log = (val: any) => console.log(yaml.stringify(val))
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
