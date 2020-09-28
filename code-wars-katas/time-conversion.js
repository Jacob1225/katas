// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  24 hour format

function timeConverter(string) {
  let s = string.split(":");
  let time = s[2].substring(2);

  if (time === "PM") {
    Number(s[0]) !== 12 ? (s[0] = (Number(s[0]) + 12).toString()) : "12";
  } else if (time === "AM" && Number(s[0]) === 12) {
    s[0] = "00";
  }
  s[2] = s[2].substring(0, 2);
  return s.join(":");
}

console.log(timeConverter("07:05:45PM"));
