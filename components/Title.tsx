interface titleProps {
  textWhite: string;
  textBlue: string;
}

const Title: React.FC<titleProps> = ({ textWhite, textBlue }) => {
  return (
    <h3 className="text-4xl md:text-5xl text-white mb-5 font-bold flex items-center justify-center">
      {textWhite}<span className="text-[#20bbf8]">{textBlue}</span>
    </h3>
  );
};
export default Title;
