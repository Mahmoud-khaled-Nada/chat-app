import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../utils/hooks/useToast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { ConversationsDetails, CreateConversationParams } from "../../utils/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { postCreateConversation } from "../../utils/api";
import { AxiosError } from "axios";
import { addConversation } from "../../store/conversationSlice";
import { Loader2 } from "lucide-react";

interface NewConnectProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type ResponseCreateConversation = {
  data: ConversationsDetails;
};

export function NewConnectModel({ open, onOpenChange }: NewConnectProps) {
  const { error, success } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateConversationParams>();
  const onSubmit: SubmitHandler<CreateConversationParams> = (data) => {
    setIsLoading(true);
    postCreateConversation(data)
      .then((response: ResponseCreateConversation) => {
        dispatch(addConversation(response.data));
        success("Login successful");
      })
      .catch((err: unknown) => {
        if (err instanceof AxiosError) {
          console.error("Axios Error:", err.response?.status, err.response?.data);
          error("Login failed", err.response?.data.message);
        } else if (err instanceof Error) {
          console.error("General Error:", err.message);
          error("Login failed", err.message);
        } else {
          console.error("Unknown Error:", err);
          error("Login failed", "An unknown error occurred. Please try again.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="contents">
          <DialogHeader>
            <DialogTitle className="text-[#01aa85]">Add Contact</DialogTitle>
          </DialogHeader>
          <Label htmlFor="password">Friend Username or Email</Label>
          <Input type="text" placeholder="Enter friend username or email" {...register("email")} />

          <Label htmlFor="message">Default Message</Label>
          <Textarea placeholder="Enter default message" {...register("message")} />

          <DialogFooter className="m-auto">
            <Button disabled={isLoading} type="submit">
              {isLoading && <Loader2 className="animate-spin" />}
              Send
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
