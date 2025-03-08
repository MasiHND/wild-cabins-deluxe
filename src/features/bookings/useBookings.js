import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParamas] = useSearchParams();

  //Filter
  const filterValue = searchParamas.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //Sort
  const sortByRaw = searchParamas.get("sortBy") || "startDate-desc"
  const [field, direction] = sortByRaw.split("-")
  const sortBy = {field, direction}

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, error };
}
