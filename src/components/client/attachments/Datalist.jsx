
let id ;
export const get_index=(i)=>{
    id = i;
}
let DataList =[];

function Datalist(status , title , date){

    
    if(status == "Accepted"|| status == "Approved" )
    {
        let dataList = [
            {
            "Id":id,
            "Status": status,
            "Title": title,
            "Date": date, 
            }
        ]
        DataList.push(dataList);
        console.log(DataList);
        
    }
    return(
        <div>
         
        </div>
    )
}
export default Datalist