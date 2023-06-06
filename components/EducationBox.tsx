import { FaCalendarAlt } from "react-icons/fa";

interface BoxProps {
    education?: string
    ocupation?: string
    university?: string
    company?: string
    inicio: string
    fim: string,
    coments: string
}

const EducationBox:React.FC<BoxProps> = ({education, ocupation, university, company, inicio, fim, coments}) => {
  return (
    <div className="relative pl-5 before:absolute before:top-0 before:left-[-11px] before:w-5 before:h-5 before:bg-[#20bbf8] before:rounded-[50%]">
      <div className="relative p-4 border-2 border-[#20bbf8] rounded-md mb-5 hover:bg-[#20bbf8] hover:bg-opacity-20 transition">
        <div className="text-[#20bbf8] pb-1 flex">
          <FaCalendarAlt className="pr-1 mr-1"/> 
          {inicio} - {fim}
        </div>
        <h3 className="text-xl font-bold">
          {education} {ocupation} - {university} {company}
        </h3>
        <p className="pt-2">
          {coments}
        </p>
      </div>
    </div>
  );
};

export default EducationBox;
