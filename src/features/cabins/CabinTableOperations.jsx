import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import Row from "../../ui/Row";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Row type="vertical">
        <Filter
          filterField="discount"
          options={[
            { value: "all", label: "All" },
            { value: "no-discount", label: "No Discount" },
            { value: "with-discount", label: "With Discount" },
          ]}
        />

        <SortBy
          options={[
            { value: "name-asc", label: "Sort By Name (Ascending)" },
            { value: "name-desc", label: "Sort By Name (Descending)" },
            { value: "regularPrice-asc", label: "Sort By Price (Low First)" },
            { value: "regularPrice-desc", label: "Sort By Price (High First)" },
            { value: "maxCapacity-asc", label: "Sort By Capacity (Low First)" },
            {
              value: "maxCapacity-desc",
              label: "Sort By Capacity (High First)",
            },
          ]}
        />
      </Row>
    </TableOperations>
  );
}

export default CabinTableOperations;
