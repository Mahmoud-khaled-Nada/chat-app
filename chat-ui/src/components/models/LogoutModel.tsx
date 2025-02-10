import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";
import { storage } from "../../utils/storage";
import { useToast } from "../../utils/hooks/useToast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { clearConversations } from "../../store/conversationSlice";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LogoutModel({ open, onOpenChange }: Props) {
  const navigate = useNavigate();
  const { success } = useToast();
  const dispatch = useDispatch<AppDispatch>();

  const handle = () => {
    localStorage.clear();
    storage.cookies_delete("access_token");
    storage.cookies_delete("user_token");
    success("Logged out successfully");
    dispatch(clearConversations());
    navigate("/guest");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#01aa85]">Log out ?</DialogTitle>
          <DialogDescription>Are you sure you want to log out?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="m-auto" onClick={handle}>
          <Button type="submit">logout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
