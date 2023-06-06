import SkillsBox from "./SkillsBox";

interface ColumnPropsSkill {
  columnSkill: string;
  codingSkill?: boolean;
  profisionalSkill?: boolean;
}

const SkillsColumn: React.FC<ColumnPropsSkill> = ({
  columnSkill,
  profisionalSkill,
  codingSkill,
}) => {
  return (
    <div id="colunm" className="flex-[1_1_25rem]">
      <h3 className="text-2xl mb-4 font-bold">{columnSkill}</h3>
      <div id="skils-box">

        {codingSkill && (
          <div className="relative border-2 border-[#20bbf8] rounded-md py-1 px-4 hover:bg-[#081b29] transition">
            <SkillsBox skill="HTML" porcentagem='90%'/>
            <SkillsBox skill="CSS" porcentagem='90%'/>
            <SkillsBox skill="Javascript" porcentagem='80%'/>
            <SkillsBox skill="SQL" porcentagem='70%'/>
          </div>
        )}

        {profisionalSkill && (
          <div className="relative border-2 border-[#20bbf8] rounded-md py-1 px-4 hover:bg-[#081b29] transition">
            <SkillsBox skill="Next.js" porcentagem='90%'/>
            <SkillsBox skill="React.js" porcentagem='80%'/>
            <SkillsBox skill="Tailwind" porcentagem='80%'/>
            <SkillsBox skill="Framer Motion" porcentagem='80%'/>
          </div>
        )}

      </div>
    </div>
  );
};

export default SkillsColumn;
