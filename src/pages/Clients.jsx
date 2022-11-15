import { useState } from "react";
import { useClient } from "@contexts/ClientsContext";
import DataTable from "@components/client/DataTable";

import ClientFilters from "../components/client/clientFilter/FiltersForm";

function Clients() {
  const clients = useClient();
  const [filteredList, setFilteredList] = useState(clients);

  const getDataFilterList = (filterL) => {
    setFilteredList(filterL);
  };

  return (
    <div>
      <ClientFilters
        setFilterList={getDataFilterList}
        filteredList={filteredList}
      />
      <DataTable data={filteredList} />
    </div>
  );
}
export default Clients;
