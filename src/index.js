// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix && matrix != []) {
        let arrSortOdd = matrix.map((i) => matrix.indexOf(i) % 2 ? i.sort((a, b) => b - a) : i);
        let str = arrSortOdd.join(',');
        let arrNotEmpty = str.split(',').filter((el) => el != "");
        let arrNumb = arrNotEmpty.map((item) => +item);
        return arrNumb;
    } else return [];
}