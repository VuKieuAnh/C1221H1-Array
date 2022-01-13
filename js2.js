let a= [41 ,5, 6, 7, 8, 8, 9, 5, 43]
// tìm xem so 7 co trong mang khong?
// nếu có thì trả về index
//nếu không thì trả về -1


// tim kiem phan tu dau tien tim thay
function timkiem(){
    let number = Number(prompt("Moi ban nhap vao so"));
    let index=-1;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == number) {
            index = i;
            break
        }
    }
    console.log(index);
}
// tim kiem phan tu cuoi cung tim thay
function timkiem2(){
    let number = Number(prompt("Moi ban nhap vao so"));
    let index=-1;
    for (let i = a.length; i >0; i--) {
        if (a[i] == number) {
            index = i;
            break
        }
    }
    console.log(index);
}
// tim so luong cac phan tu
function timkiem2(){
    let number = Number(prompt("Moi ban nhap vao so"));
    let count=0
    for (let i = a.length; i >0; i--) {
        if (a[i] == number) {
            count++;
        }
    }
    console.log(index);
}
