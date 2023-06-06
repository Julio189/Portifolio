
import HeaderMobile from "./HeaderMobile";
import Logo from "./Logo";
import Navbar from "./Navbar";


export default function Header() {
  return (
    <header className="fixed md:top-0 md:left-0 w-full py-5 px-[9%] bg-[#081b29] flex justify-between shadow-[0_10px_30px_-10px] shadow-[rgba(2,12,27,0.7)] items-center z-50">
      <Logo />
      <Navbar />
      <HeaderMobile />
    </header>
  )
}
