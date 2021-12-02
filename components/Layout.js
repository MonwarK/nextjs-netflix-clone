import { auth } from "../utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Loading from "./Loading";
import router from "next/router"

export default function Layout({ children, isAuth }) {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user && isAuth) {
      router.push("/")
    }
    if (user && !isAuth) {
      router.push("/home")
    }
  }, [user])

  return (
    loading ? (
      <Loading />
    ) : (
      isAuth ? (
        user && <div>{children}</div>
      ) : (
        !user && <div>{children}</div>
      )
    )
  )
}
