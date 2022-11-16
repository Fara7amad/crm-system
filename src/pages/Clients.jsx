import { useState } from "react";
import { useClient } from "@contexts/ClientsContext";
import DataTable from "@components/client/DataTable";

import ClientFilters from "../components/client/clientFilter/FiltersForm";

function Clients() {
  return (
    <div>
      <DataTable />
    </div>
  );
}
export default Clients;
