import { useEffect, useState } from "react";
import Link from "next/link"
import { auth } from "../utilities/firebase";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const user = auth.currentUser === null ? false : true;
    setIsLoggedIn(user)
  }, [auth.currentUser])

  return (
    <div className={`flex items-center justify-between w-full fixed h-20 z-30 ${scrollPosition > 15 && "bg-black"} transition duration-200`}>
      <Link href={isLoggedIn ? "/home" : "/"}>
        <img 
          className="w-32 h-16 object-contain cursor-pointer"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix"
        />
      </Link>

      {isLoggedIn ? (
        <Link href="/home/profile">
          <img
            className="w-10 h-10 object-cover mr-4 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
          />
        </Link>
      ) : (
        <Link href="/login">
          <button className="mr-4 btn">
            Sign In
          </button>
        </Link>
      )}
      
    </div>
  )
}
