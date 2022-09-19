export function emailRegex(email) {
  let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
  return regex.test(email);
}
export function phoneNoRegex(phoneNo) {
  var cleaned = ("" + phoneNo).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3] + "-" + match[4];
  }
  return null;
}