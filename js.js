let mang = [
    [2, 3, 4, 5],
    [3, -4, 5, 6],
    [3, 4, 15, 6],
    [3, 4, 5, 5]
]
// tong cac hang
// for (let i = 0; i < mang.length; i++) {
//     let tong = 0;
//     for (let j = 0; j < mang[i].length; j++) {
//         tong+= mang[i][j];
//     }
//     document.writeln(tong);
//     document.writeln("<br>")
// }
// tong cac cot
for (let i = 0; i < mang.length; i++) {
    let tong = 0;
    for (let j = 0; j < mang[i].length; j++) {
        tong+= mang[j][i];
    }
    document.writeln(tong);
    document.writeln("<br>")
}



// duong cheo chinh
// let tong=0;
// for (let i = 0; i < mang.length; i++) {
//     // for (let j = 0; j < mang.length; j++) {
//          tong +=mang[i][i];
//     // }
// }
// duong cheo phu
// let tong=0;
// for (let i = 0; i < mang.length; i++) {
//     // for (let j = 0; j < mang.length; j++) {
//          tong +=mang[i][mang.length-1-i];
//     // }
// }
// document.writeln(tong)
