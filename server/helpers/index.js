/**
 * This is a helper file used for storing all the helper functions
 * @param {*} list 
 * @returns 
 */


async function sortUsersFromList(list) {
  return list.sort((a, b) => a.name.localeCompare(b.name));
}

module.exports = { sortUsersFromList };