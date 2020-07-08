export default function isuuid(
  str: string,
  version?: 1 | 2 | 3 | 4 | 5,
): boolean {
  const _verion = version ?? "1-5";
  const reg = new RegExp(
    `^[0-9a-f]{8}-[0-9a-f]{4}-[${_verion}][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$`,
    "i",
  );
  return reg.test(str);
}
