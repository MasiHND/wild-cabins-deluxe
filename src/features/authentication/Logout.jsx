import ButtonIcon from "../../ui/ButtonIcon"
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { useLogOut } from "./useLogOut";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
    const { logout, isPending } = useLogOut();

    return (
      <ButtonIcon disabled={isPending} onClick={logout}>
        {!isPending ? <HiArrowLeftStartOnRectangle /> : <SpinnerMini/>}
      </ButtonIcon>
    );
}

export default Logout
