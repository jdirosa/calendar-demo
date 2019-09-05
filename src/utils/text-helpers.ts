/** Limits the text length to the length provided. "Long Text" returned as "Long T..."" */
export function trimText(maxLength: number, text: string) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
}
