import { auth } from "../utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Loading from "./Loading";
import router from "next/router"
import { useRecoilValue } from "recoil";
import { isModalOpenState } from "../atoms/movieAtom";

export default function Layout({ children, isAuth }) {
  const [user, loading, error] = useAuthState(auth);
  const isOpen = useRecoilValue(isModalOpenState);

  useEffect(() => {
    if (!user && isAuth) {
      router.push("/")
    }
    if (user && !isAuth) {
      router.push("/home")
    }
  }, [user]);

  return (
    loading ? (
      <Loading />
    ) : (
      isAuth ? (
        user && <div className={isOpen && "h-screen overflow-hidden"}>{children}</div>
      ) : (
        !user && <div className={isOpen && "h-screen overflow-hidden"}>{children}</div>
      )
    )
  )
}
