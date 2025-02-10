import { useEffect, useState } from "react";
import { UserProfileDetails } from "../types";
import { getAuthUser } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setUser } from "../../store/userSlice";
import { storage } from "../storage";

export function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const userState = useSelector((state: RootState) => state.user.user);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUpdateUser] = useState<UserProfileDetails | null>(userState);

  useEffect(() => {
    if (userState) {
      setUpdateUser(userState);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      try {
        const userToken = storage.cookies_get<UserProfileDetails>("user_token");
        if (userToken) {
          console.log("User found in storage");
          setUpdateUser(userToken);
          dispatch(setUser(userToken));
        } else {
          console.log("Fetching user from API...");
          const { data } = await getAuthUser({ signal });
          storage.cookies_save("user_token", data, { expires: 1});
          setUpdateUser(data);
          dispatch(setUser(data));
        }
      } catch (err) {
        console.error("Auth Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();

    return () => controller.abort();
  }, [userState, dispatch]);

  return { user, isLoading };
}
