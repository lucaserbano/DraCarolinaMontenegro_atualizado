import { motion } from 'motion/react';
import { GraduationCap, Award, Globe, BookOpen } from 'lucide-react';
import aboutImg from '../assets/images/foto dallas.jpeg';
import logoPattern from '../assets/logos/logo-bordo.png';

export default function About() {
  const education = [
    {
      year: '2026',
      title: 'Residência em Insuficiência Cardíaca e Transplante',
      institution: 'Instituto do Coração (InCor) – HCFMUSP',
      desc: 'Especialização em Insuficiência Cardíaca Avançada, Dispositivos de Assistência Ventricular e Transplante Cardíaco.'
    },
    {
      year: '2025',
      title: 'Residência em Cardiologia',
      institution: 'Hospital de Clínicas da Universidade Federal do Paraná (UFPR)',
      desc: 'Formação completa em cardiologia clínica e diagnóstica.'
    },
    {
      year: '2023',
      title: 'Residência em Clínica Médica',
      institution: 'Hospital Santa Casa de Curitiba',
      desc: 'Base sólida em medicina interna e atendimento hospitalar.'
    },
    {
      year: '2020',
      title: 'Graduação em Medicina',
      institution: 'Pontifícia Universidade Católica do Paraná (PUCPR)',
      desc: 'Formação acadêmica de excelência.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-offwhite py-24 border-b border-pearl/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-bordo mb-6"
          >
            Sobre a Dra. Carolina
          </motion.h1>
          <p className="text-xl text-grafite/70 font-light leading-relaxed max-w-2xl mx-auto">
            Dedicação à Cardiologia de alta complexidade,<br />
            unindo o uso da ciência ao atendimento acessível.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="prose prose-lg prose-slate text-grafite/80 font-light flex flex-col items-center text-center justify-center mx-auto"
          >
            <h2 className="text-3xl font-serif text-bordo mb-6 text-center">Trajetória Profissional</h2>
            <p className="mb-6">
              A Dra. Carolina Montenegro é uma médica cardiologista com formação robusta e focada em casos de alta complexidade. A jornada acadêmica e profissional que ela percorreu reflete compromisso com a excelência e a atualização constante.
            </p>
            <p className="mb-6">
              Após graduar-se pela PUCPR, seguiu para a residência em Clínica Médica na Santa Casa de Curitiba. Seu interesse pelas condições cardíacas a levou à residência de Cardiologia na UFPR, seguida por uma subespecialização no InCor-HCFMUSP em São Paulo, serviço de referência no Brasil e no exterior.
            </p>
            <p>
              Buscando expandir ainda mais suas habilidades, realizou um <em>Observership</em> no Departamento de Insuficiência Cardíaca Avançada e Transplante do <strong>Baylor Scott & White Health</strong>, em Dallas (EUA), trazendo para sua prática clínica protocolos e visões de um dos maiores centros de saúde do mundo.
            </p>

            <div className="mt-10 pt-8 border-t border-pearl w-full flex justify-center">
              <a
                href="http://lattes.cnpq.br/0656857519859758"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-bordo font-medium hover:text-bordo/80 transition-colors"
              >
                <BookOpen size={20} />
                Acessar Currículo Lattes Completo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl border border-pearl bg-offwhite">
              {/* Placeholder for professional photo */}
              <img
                src={aboutImg}
                alt="Dra. Carolina Montenegro"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-pearl max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="text-bordo w-6 h-6" />
                <span className="text-xs font-bold tracking-widest uppercase text-grafite">Experiência Internacional</span>
              </div>
              <p className="text-sm text-grafite/70 font-light">
                Observership em Dallas (EUA) - Baylor Scott & White Health
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline / Education */}
      <div className="relative py-24 bg-gradient-to-br from-offwhite via-white to-champagne/20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url(${logoPattern}), url(${logoPattern})`,
            backgroundSize: '400px 400px',
            backgroundPosition: '0 0, 200px 200px',
            backgroundRepeat: 'repeat'
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-3xl font-serif text-bordo mb-16 text-center">Formação Acadêmica</h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-champagne before:to-transparent">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-champagne bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {index === 0 ? <Award size={20} className="text-bordo" /> : <GraduationCap size={20} className="text-grafite/60" />}
                </div>

                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm border border-pearl hover:border-champagne/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-bordo font-serif">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-grafite mb-1">{item.title}</h3>
                  <div className="text-sm font-medium text-grafite/60 mb-3 uppercase tracking-wide">{item.institution}</div>
                  <p className="text-grafite/70 font-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
