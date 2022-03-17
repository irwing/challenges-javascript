const groupArrayStringsFirstLetter = (array) => {
  // validate is input array is empty, null or not a array
  if (!array || !Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  // agrupate elements for first letter
  const grouped = {};
  array.map((element) => {
    const firstLetter = element[0].toLowerCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(element);
  });

  return grouped;
};

module.exports = groupArrayStringsFirstLetter;
