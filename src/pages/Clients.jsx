import { useEffect, useState } from "react";
import { useClient } from "@contexts/ClientsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClientsFilters from "../components/client/ClientsFilters";
import FormFilterDrop from "../components/FormFilterDrop";

function Clients() {
  const clients = useClient();
  const [obj_Filter, setObj_Filter] = useState({});
  const [filteredList, setFilteredList] = useState(clients);

  const getData = (obj) => {
    setObj_Filter(obj);
  };

  const getDataFilterList = (filterL) => {
    setFilteredList(filterL);
  };

  return (
    <div className="Filter">
      <FormFilterDrop
        setFilterList={getDataFilterList}
        filteredList={filteredList}
      />
      <p></p>
    </div>
  );
}
export default Clients;
