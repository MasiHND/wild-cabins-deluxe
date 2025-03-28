import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Settings Successfully Updated.");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateSetting, isUpdating };
}
