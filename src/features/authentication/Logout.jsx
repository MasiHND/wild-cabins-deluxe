import ButtonIcon from "../../ui/ButtonIcon"
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import { useLogOut } from "./useLogOut";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
    const { logout, isPending } = useLogOut();

    return (
      <ButtonIcon disabled={isPending} onClick={logout}>
        {!isPending ? <HiArrowRightStartOnRectangle /> : <SpinnerMini/>}
      </ButtonIcon>
    );
}

export default Logout
