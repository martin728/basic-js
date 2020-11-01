module.exports = function countCats(matrix1) {
    let count = 0;
    for (var i = 0; i < matrix1.length; i++) {
        for (var j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] === "^^") {
                count++
            }
        }
    }
    return count;
};