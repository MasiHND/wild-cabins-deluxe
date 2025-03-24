import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignUp() {
  const {
    mutate: signup,
    error,
    isPending,
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success("User successfully created !");
      toast("Please verify your account from your Email.");
    },
  });

  return { signup, error, isPending };
}
