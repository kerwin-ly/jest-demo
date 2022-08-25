/**
 * @description Convert current url query string to object
 * @export
 * @return {*}
 */
export function convertUrlStrToObj() {
  return Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  );
}
