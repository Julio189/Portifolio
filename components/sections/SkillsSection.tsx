import SkillsColumn from "../SkillsColumn"
import Title from "../Title"

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen pt-12 px-[9%] md:pb-10 bg-[#112e42]">
      <Title textWhite="My" textBlue="Skills"/>

      <div id='row' className="text-white flex flex-wrap gap-12 mt-12">
        <SkillsColumn columnSkill="Coding Skills" codingSkill/>

        <SkillsColumn columnSkill="Frameworks Skills" profisionalSkill/>
      </div>
    </section>
  )
}

export default SkillsSection
