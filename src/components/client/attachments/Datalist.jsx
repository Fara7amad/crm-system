let id;
export const get_index = (i) => {
  id = i; /* لتتأكد من التايتل في عملية الحذف */
};

let t;
export const get_delete = (ti) => {
  t = ti; /*  جبنا التايتل من عند الاتاتشمينت*/
};

let DataList = [];
//let dataToGetCompany=JSON.parse(localStorage.getItem("clients"));

export const delete_list = () => {
  if (t) {
    for (let m = 0; m < DataList.length; m++) {
      if (DataList[m].Title == t) {
        /*  عملية حذف الاوبجيكت */
        for (let mm = m; mm < DataList.length - 1; mm++) {
          DataList[mm] = DataList[mm + 1];
        }
        DataList.length--;
      }
    }
  }
};

function Datalist(status, title, date) {
  if (status == "Accepted" || status == "Approved") {
    let dataList = {
      Id: id,
      Status: status,
      Title: title,
      Date: date,
      //"Company":dataToGetCompany[id].company
    };
    DataList.push(dataList);
    console.log(DataList);
  }

  return <div></div>;
}
export default Datalist;
