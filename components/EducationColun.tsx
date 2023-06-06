import EducationBox from "./EducationBox";

interface ColumnProps {
  columnTitle: string;
  education?: boolean;
}

const EducationColun: React.FC<ColumnProps> = ({ columnTitle, education }) => {
  return (
    <div className="flex-[1_1_25rem]">
      <h3 className="text-2xl mb-4 ml-5 font-bold">
        {columnTitle}
      </h3>

      {education && (
        <div className="border-l-2 border-[#20bbf8] ">
            <EducationBox
              education="Systems Development Technician"
              university="ETEC"
              inicio="2021"
              fim="2022"
              coments="Adquiri conhecimento sobre as linguagens Java, Javascript, PHP. Aulas também de HTML5, Css, frameworks, aplicações Mobile e aulas sobre Windowns e Linux"
            />
          
            <EducationBox
              education="English"
              university="CAA"
              inicio="2015"
              fim="2017"
              coments="Tive aulas de Ingles do nivel basico até avançado 1, adiquirindo um nivel de conversação e conhecimento intermediario de ingles"
            />
          
        </div>
      )}

      {!education && (
        <div className="border-l-2 border-[#20bbf8] ">
            <EducationBox
              ocupation="Web Developer"
              company="Free Lancer"
              inicio="2022"
              fim="2023"
              coments="Estive em alguns projetos como Validação de Login e Senha, criação de sites utilizando Api e banco de dados, além de alguns projetos de e-commerce"
            />
          
            <EducationBox
              ocupation="Automotive Electrician"
              company="ATT Transportes"
              inicio="2022"
              fim="2023"
              coments="Atuava com manuntenção elétrica de onibus, como fiação, atualiação de componentes que usavam o Linux"
            />
        </div>
      )}
    </div>
  );
};
export default EducationColun;
