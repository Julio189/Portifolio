import Button from "../Button"
import Inputs from "../Inputs"
import Title from "../Title"

const ContactSection = () => {
  return (
    <section className='min-h-screen pt-12 px-[9%] md:pb-10 bg-[#081b29]' id="contact">
      <Title textWhite="Contact" textBlue="Me"/>

      <form action="#" className="w-full md:max-w-[43rem] mx-auto items-center">
        <div id="box" className="relative flex flex-col md:flex-row md:justify-between flex-wrap">
            <Inputs id="name" type="text" placeholder="Full Name"/>
            <Inputs id="emailAdress" type="text" placeholder="Email Adress"/>
        </div>

        <div id="box" className="relative flex flex-col md:flex-row md:justify-between flex-wrap">
            <Inputs id="number" type="number" placeholder="Mobile Number"/>
            <Inputs id="emailSubject" type="text" placeholder="Email Subject"/>
        </div>

        <div className="relative">
            <textarea id="message" cols={30} rows={10} placeholder=" " required className="w-full h-full p-4 text-white bg-transparent rounded-md border-2 border-[#20bbf8] outline-none placeholder:text-white hover:bg-[#112e42] transition peer"></textarea>
            <label htmlFor="message" className="absolute text-xs md:text-sm text-white duration-150 transform -translate-y-3 scale-75 top-[10px] z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                Your Message
            </label>
        </div>

        <div className="items-center mx-auto justify-center flex mt-4">
            <Button cover name="Sumit" href="#" />
        </div>
      </form>
    </section>
  )
}

export default ContactSection
