import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import LoginForm from "./login";

interface IPopoverProps {
    onClick: () => void;
    label: string;
    children?: React.ReactNode;
}
const Modal = () => {
    return (
        <div className="  ">
            <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent><LoginForm/></PopoverContent>
            </Popover>
        </div>
    );
}

export default Modal;