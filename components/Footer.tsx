'use client';

import { BiUpArrowAlt } from 'react-icons/bi'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="text-white flex justify-between items-center flex-wrap py-5 px-[9%] bg-[#112e42] mt-4">
      <div>
        <p>Copyright &copy; 2023 by Julio</p>
      </div>
      <div className=''>
        <Link 
        activeClass="active"
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="relative flex justify-center items-center z-30 w-10 h-10 bg-transparent border-2 border-[#20bbf8] rounded-md overflow-hidden before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:w-0 before:h-[350%] before:bg-[#20bbf8] before:-z-10 transition-colors before:duration-500 hover:before:w-full hover:text-[#081b29] cursor-pointer"
        > 
            <BiUpArrowAlt size={25}/>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
