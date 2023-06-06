import Link from "next/link";

interface IconsPorps {
  icon: any;
  href:string
}

const Icons: React.FC<IconsPorps> = ({ icon, href }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className="relative flex justify-center items-center w-10 h-10 bg-transparent border-2 border-[#20bbf8] rounded-[50%] overflow-hidden before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-z-20 before:w-0 before:h-[350%] before:bg-[#20bbf8] transition-colors before:duration-500 hover:before:w-full hover:text-[#081b29]"
    >
      {icon}
    </Link>
  );
};

export default Icons;
