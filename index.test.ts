import { peekLog } from ".";

it("peeks", () => {
  console.log = jest.fn(console.info);
  const obj = peekLog({
    rand: Math.random(),
    value: "abc",
  });
  expect(obj).toHaveProperty("value");
  expect(obj).toHaveProperty("rand");
  expect(obj.value).toBe("abc");
  expect(console.log).toHaveBeenCalledWith(obj);
  console.log("result", obj);
});
it("peeks with json stringified", () => {
  console.log = jest.fn(console.info);
  const obj = peekLog(
    {
      rand: Math.random(),
      value: "abc",
    },
    (e) => console.log(JSON.stringify(e))
  );
  expect(obj).toHaveProperty("value");
  expect(obj).toHaveProperty("rand");
  expect(obj.value).toBe("abc");
  expect(console.log).toHaveBeenCalledWith(JSON.stringify(obj));
  console.log("result", obj);
});
it("peeks async value", async () => {
  console.log = jest.fn(console.info);
  const asyncFn = async () =>
    JSON.stringify({
      rand: Math.random(),
      value: "abc",
    });
  const str = await peekLog(asyncFn());
  const obj = JSON.parse(str);
  expect(obj).toHaveProperty("value");
  expect(obj).toHaveProperty("rand");
  expect(obj.value).toBe("abc");
  expect(console.log).toHaveBeenCalledWith(str);
  console.log("result", str);
});
