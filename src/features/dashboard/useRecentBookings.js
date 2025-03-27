import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchPararams] = useSearchParams();

  const numDays = !searchPararams.get("last")
    ? 7
    : Number(searchPararams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isPending, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last=${numDays}`],
  });

  return { isPending, bookings, numDays };
}
