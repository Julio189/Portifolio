
interface SkillProps {
    skill: string,
    porcentagem: string
}

const SkillsBox:React.FC<SkillProps> = ({ skill, porcentagem }) => {
  return (
    <div id="progress" className="py-2">
      <h3 className="flex justify-between font-semibold">
        {skill} <span>{porcentagem}</span>
      </h3>
      <div className="h-6 rounded-md border-2 border-[#20bbf8] p-1 my-2">
        <span className={`block h-full rounded-sm bg-[#20bbf8] w-[${porcentagem}]`}></span>
      </div>
    </div>
  );
};

export default SkillsBox;
