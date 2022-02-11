/**
 * Algo for Check Ugly numberber
 * Step-1:-Check input numberber is 1
 * Step-1.1:-If step-1 is truthy, return true,
 * Step-2:- Check input numberber <= 0,
 * Step-2.1:-If step 2 is truthy, return false
 * Step-3:-Check input % 2 or input % 3 or input % 5 == 0
 * Step-3.1:-If step-3 is truthy, return true
 * Step-3:-If step-3 is falsy, return false
 */
function CheckUglynumberber(number) {
  if (number == 1) {
    return true;
  }
  if (number <= 0) {
    return false;
  }
  if (number % 2 == 0) {
    number = number / 2;
  }
  if (number % 3 == 0) {
    number = number / 3;
  }
  if (number % 5 == 0) {
    number = number / 5;
  } else {
    return false;
  }
  return true;
}

console.log(CheckUglynumberber(13));
