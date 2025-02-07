import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface NewConnectProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewConnectModel({ open, onOpenChange }: NewConnectProps) {
  console.log("Dialog open state:", open);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#01aa85]">Add Contact</DialogTitle>
        </DialogHeader>
        <Label htmlFor="password">Friend Username or Email</Label>
        <Input type="text" placeholder="Enter friend username or email" />

        <Label htmlFor="password">Default Message</Label>
        <Textarea placeholder="Enter default message" />

        <DialogFooter className="m-auto">
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
