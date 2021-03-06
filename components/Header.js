import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../utilities/firebase";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import router from "next/router"
import Image from "next/image"

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    router.push({ pathname: `/home/search`, query: { name: search } });
  }  

  const animation = {
    open: {
      display: "block",
      flexGrow: 1,
    },
    close: {
      width: 0,
    }
  }

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
    <>
      <div className={`flex items-center justify-between w-full fixed h-20 z-30 ${scrollPosition > 15 && "bg-black"} transition duration-200`}>
        <Link href={isLoggedIn ? "/home" : "/"}>
          <Image 
            width={128}
            height={64}
            objectFit="contain"
            className="cursor-pointer"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix"
          />
        </Link>

        <motion.div 
          className=" ml-auto overflow-hidden md:max-w-xs"
          initial={animation.close} 
          animate={isSearchOpen ? animation.open : animation.close}
        >
          <form 
            onSubmit={handleSearch} 
            className="w-[95%] mx-auto outline-none bg-gray-700 text-white rounded-md flex items-center py-2 px-3 relative"
          >
            <input 
              className="flex-grow outline-none bg-transparent pr-5"
              type="text" 
              placeholder="Search movies..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" hidden className="hidden"></button>
            <XIcon 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
              className="h-5 w-5 text-gray-400 cursor-pointer absolute right-3" 
            />
          </form>
        </motion.div>

        <div className="flex items-center mx-4">
          {isLoggedIn ? (
            <>
              {!isSearchOpen && (
                <SearchIcon onClick={() => setIsSearchOpen(!isSearchOpen)} className="h-6 text-gray-200 transition duration-150 hover:scale-125 cursor-pointer mr-4" />
              )}
              <Link href="/home/profile">
                <Image
                  width={40}
                  height={40}
                  className="cursor-pointer"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="profile"
                />
              </Link>
            </>
          ) : (
            <Link href="/login">
              <button className="btn">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
