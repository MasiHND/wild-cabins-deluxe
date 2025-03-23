import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    data: user,
    isFetching,
    isPending,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const isLoading = isPending || isFetching;

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
