import styled from "styled-components";
import Stats from "./Stats";

import { useRecentBookings } from "../../features/dashboard/useRecentBookings";
import { useRecentStays } from "../../features/dashboard/useRecentStays";

import Spinner from "../../ui/Spinner";
import { useCabins } from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending: isLoading1, bookings, numDays } = useRecentBookings();
  const { isPending: isLoading2, stays, cofirmedStays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) {
    return <Spinner />;
  }
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={cofirmedStays} numDays ={numDays} cabinCount={cabins.length} />
      <div>todays activity</div>
      <div>chart stay durations</div>
      <div>chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
