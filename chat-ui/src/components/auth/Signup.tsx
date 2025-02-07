import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InputContainer } from "@styled";

export const Signup = () => {
  return (
    <InputContainer>
      <Label htmlFor="username">Your username</Label>
      <Input type="text" placeholder="username" />
      <Label htmlFor="email">Your username</Label>
      <Input type="email" placeholder="email@domain.com" />
      <Label htmlFor="password">Your password</Label>
      <Input type="password" placeholder="*********" />
      <Button className="w-1/2 flex justify-center m-auto mt-5">Signup</Button>
    </InputContainer>
  );
};
