
function Datalist(status , title , date){

    let counter = 0;
    if(status == "Accepted"|| status == "Approved" )
    {
        let dataList = [
            {
                "Status": status,
                "Title": title,
                "Date": date, 
            }
        ]
        console.log(title , status , date   );
        console.log(dataList[counter]);
        counter++;
    }
    return(
        <div>
         
        </div>
    )
}
export default Datalist