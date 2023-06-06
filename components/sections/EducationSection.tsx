
import Title from "../Title"
import EducationColun from "../EducationColun"

const EducationSection = () => {
  return (
    <section id='education' className="min-h-screen pt-5 px-[9%] md:pb-10 bg-[#081b29] text-white flex justify-center items-center flex-col min-h-auto pb-12">
      <Title textWhite="My" textBlue="Journey"/>

        <div className="flex flex-wrap gap-12">
            <EducationColun education columnTitle="Education"/>
            <EducationColun columnTitle="Experience"/>
        </div>

    </section>
  )
}
export default EducationSection
