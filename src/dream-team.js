module.exports = function createDreamTeam(arrayOfNames) {
    if (!Array.isArray(arrayOfNames)) return false;
    let secretMessage = arrayOfNames.map(function(name) {
        if (typeof name === 'string')
            return name.trim().charAt(0).toUpperCase();
        else
            return '';
    });
    return secretMessage.join() == '' ? false : secretMessage.sort().join('');
};