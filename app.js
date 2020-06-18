const aProfile = [];

function makeRandomProfiles(num) {
  for (i = 1; i <= num; i++) {
    let oProfile = {
      name: getRandomString(),
      age: getRandomNumber(18, 70),
      id: getRandomId(),
    };
    aProfile.push(oProfile);
  }
  return aProfile;
}

const getRandomString = (length = 6) =>
  Math.random().toString(20).substr(2, length);
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomId = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-4" +
    S4().substr(0, 3) +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  ).toLowerCase();
};

console.log(makeRandomProfiles(4));
