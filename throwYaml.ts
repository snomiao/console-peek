import yaml from "yaml";


export const throwYaml = <T extends Promise<any> | any>(
  val: T,
  field?: string | number,
  log = (val: any) => console.log(yaml.stringify(val).trim())
): T => {
  (async function () {
    if (field !== undefined) {
      if (val instanceof Promise) {
        throw yaml.stringify({ [field]: await val });
      } else {
        throw yaml.stringify({ [field]: val });
      }
    } else if (val instanceof Promise) {
      throw yaml.stringify(await val);
    } else {
      throw yaml.stringify(val);
    }
  })();
  return val;
};
