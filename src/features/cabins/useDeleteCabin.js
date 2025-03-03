import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin  } = useMutation({
    mutationFn: deleteCabinApi,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("The Cabin Has Successfuly Deleted.");
    },

    onError: (err) => toast.error(err.message),
  });

  return {isDeleting, deleteCabin}
}
