import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormContainer } from "@styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginParams } from "@/utils/types";
import { useToast } from "@/utils/hooks/useToast";
import { postLogin } from "@/utils/api";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { LoginResponse } from "../../utils/types";
import { saveUserToken } from "../../utils/api/config";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setUser } from "../../store/userSlice";

export const Login = () => {
  const { error, success } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>();
  const onSubmit: SubmitHandler<LoginParams> = (data) => {
    setIsLoading(true);
    postLogin(data)
      .then((response: LoginResponse) => {
        const { user, access_token } = response.data;
        console.log("User:", user);
        dispatch(setUser(user));
        saveUserToken(access_token);
        success("Login successful");
        navigate("/");
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
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">Your email</Label>
      <Input type="email" placeholder="email@test.com" defaultValue="nada@test.com" {...register("email")} />
      <Label htmlFor="password">Your password</Label>
      <Input type="password" placeholder="*********" defaultValue="1234567" {...register("password")} />
      <Button disabled={isLoading} type="submit" className="w-1/2 flex justify-center m-auto mt-5">
        {isLoading && <Loader2 className="animate-spin" />}
        Login
      </Button>
    </FormContainer>
  );
};
