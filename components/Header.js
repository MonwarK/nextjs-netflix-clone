import { useEffect, useState } from "react";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
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

  return (
    <div className={`flex items-center justify-between w-full fixed h-20 z-30 ${scrollPosition > 15 && "bg-black"} transition duration-200`}>
      <img 
        className="w-32 h-16 object-contain"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix"
      />

      <img
        className="w-10 h-10 object-cover mr-4"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="profile"
      />
    </div>
  )
}
