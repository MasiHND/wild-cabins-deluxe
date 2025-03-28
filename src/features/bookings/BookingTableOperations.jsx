import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import Row from "../../ui/Row";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Row type="vertical">
        <Filter
          filterField="status"
          options={[
            { value: "all", label: "All" },
            { value: "checked-out", label: "Checked out" },
            { value: "checked-in", label: "Checked in" },
            { value: "unconfirmed", label: "Unconfirmed" },
          ]}
        />

        <SortBy
          options={[
            { value: "startDate-desc", label: "Sort by date (descending)" },
            { value: "startDate-asc", label: "Sort by date (ascending)" },
            {
              value: "totalPrice-desc",
              label: "Sort by amount (high first)",
            },
            { value: "totalPrice-asc", label: "Sort by amount (low first)" },
          ]}
        />
      </Row>
    </TableOperations>
  );
}

export default BookingTableOperations;
