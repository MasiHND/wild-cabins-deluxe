import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <Button
          size="medium"
          variation="primary"
          onClick={() => setShowForm((show) => !show)}
        >
          + New Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
