
let tinhTrungBinh = (...num) => {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
      total += num[i];
    }
    return total / num.length;
  };
  
  

let khoiA = () => {
  let Toan = document.querySelector("#inpToan").value * 1,
  Ly = document.querySelector("#inpLy").value * 1,
  Hoa = document.querySelector("#inpHoa").value * 1;

 
  document.querySelector("#tbKhoi1").innerHTML = tinhTrungBinh(Toan,Ly,Hoa);
};

let khoiB = () => {
    let Van = document.querySelector("#inpVan").value * 1,
    Su = document.querySelector("#inpSu").value * 1,
    Dia = document.querySelector("#inpDia").value * 1,
    English = document.querySelector("#inpEnglish").value * 1;
  
   
    document.querySelector("#tbKhoi2").innerHTML = tinhTrungBinh(Van,Su,Dia,English);
  };


