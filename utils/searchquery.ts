type createNewUrlProps = {
  newParam: string,
  newValue?: string | undefined,
}
/**
 * Creates a new URL with the new query param and value.
 * 
 * @example
 * ```ts
 * const newUrl = createNewUrl({ newParam: "page", newValue: "2" });
 * console.log(newUrl); // https://example.com -> https://example.com?page=2
 * ```
 */
export const createNewUrl = ({ newParam, newValue }: createNewUrlProps) => {
  const url = new URL(window.location.href); // Gets current URL
  const params = new URLSearchParams(url.search); // Get the query params

  if (newValue) {
    params.set(newParam, newValue);
  } else {
    params.delete(newParam);
  }

  return `${url.origin}${url.pathname}?${params.toString()}`;
}
