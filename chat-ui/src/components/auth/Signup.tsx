import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormContainer } from "@styled";
import { useToast } from "../../utils/hooks/useToast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { postRegister } from "../../utils/api";
import { RegisterParams, RegisterResponse } from "../../utils/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { saveUserToken } from "../../utils/api/config";
import { setUser } from "../../store/userSlice";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";

export const Signup = () => {
  const { error, success } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterParams>();
  const onSubmit: SubmitHandler<RegisterParams> = (data) => {
    setIsLoading(true);
    postRegister(data)
      .then((response: RegisterResponse) => {
        const { user, access_token } = response.data;
        dispatch(setUser(user));
        saveUserToken(access_token);
        success("Create account successful ✅");
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
      {/* <Label htmlFor="username">Your username</Label> */}
      <Input type="text" placeholder="username" {...register("username")}/>
      {/* <Label htmlFor="email">Your username</Label> */}
      <Input type="email" placeholder="email@domain.com" {...register("email")} />
      {/* <Label htmlFor="firstName">Your first name</Label> */}
      <Input type="text" placeholder="first name" {...register("firstName")}/>
      {/* <Label htmlFor="lastName">Your last name</Label> */}
      <Input type="text" placeholder="last name" {...register("lastName")}/>
      {/* <Label htmlFor="username">Your username</Label> */}
      {/* <Label htmlFor="password">Your password</Label> */}
      <Input type="password" placeholder="*********" {...register("password")} />
      <Button disabled={isLoading} type="submit" className="w-1/2 flex justify-center m-auto mt-5">
        {isLoading && <Loader2 className="animate-spin" />}
        Signup
      </Button>
    </FormContainer>
  );
};
