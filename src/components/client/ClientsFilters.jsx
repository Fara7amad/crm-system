import { useEffect, useState } from "react";
import { useClient } from "@contexts/ClientsContext";
function ClientsFilters(props) {
  console.log(props.type);
  console.log(props.state);
  const [filters, setFilters] = useState({
    state: props.state,
    type: props.type,
  });

  console.log(filters);

  const [filteredList, setfilteredList] = useState([...props.filteredList]);

  useEffect(() => {
    let filtered = [...filteredList];

    if (filters.type)
      filtered = [...filtered.filter((client) => client.type == filters.type)];

    if (filters.state)
      filtered = [
        ...filtered.filter((client) => client.state == filters.state),
      ];

    if (filtered.length != filteredList) {
      setfilteredList(filtered);
      props.onClick(filtered);
    }
  }, [filters]);

  return (
    <div>
      <ul>
        {filteredList.map((client) => (
          <li>
            {client.firstName} | {client.type} |{client.state}|{client.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsFilters;
