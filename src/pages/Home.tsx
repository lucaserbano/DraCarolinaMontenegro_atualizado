import { motion } from 'motion/react';
import { ArrowRight, Heart, Activity, Clock, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/foto para hero2.jpeg';
import secondSectionImg from '../assets/images/WhatsApp Image 2026-03-03 at 14.10.59.jpeg';
import logoBordo from '../assets/logos/logo-bordo.png';
import { CONSULTORIO, HOSPITALS, TELECONSULTA_WA } from '../data/locations';

export default function Home() {
  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-40 lg:py-48 bg-offwhite">
        {/* Painel direito — toque de cor suave */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-y-0 right-0 w-[55%] bg-gradient-to-l from-pearl/30 via-pearl/10 to-transparent"></div>
          <div className="absolute inset-y-0 right-[44.5%] w-[1px] bg-gradient-to-b from-transparent via-bordo/8 to-transparent hidden lg:block"></div>
        </div>
        {/* Noise texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)"/>
        </svg>
        {/* Logo watermark */}
        <div className="absolute inset-0 z-0 flex items-center justify-end pr-8 pointer-events-none">
          <img
            src={logoBordo}
            alt=""
            aria-hidden="true"
            className="h-[85%] w-auto object-contain opacity-[0.03] select-none"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-24 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-bordo/5 text-bordo text-xs font-bold tracking-widest uppercase mb-8 border border-bordo/10">
                  Insuficiência Cardíaca e Transplante
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium text-bordo leading-[1.1] mb-8">
                  Experiência para <br />
                  <span className="text-grafite">casos complexos</span> <br />
                  do coração
                </h1>
                <p className="text-lg text-grafite/70 mb-12 leading-relaxed max-w-lg font-light">
                  Ciência para tratar, sensibilidade para cuidar. Tenha uma especialista ao seu lado!
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-bordo text-white text-sm font-medium uppercase tracking-widest hover:bg-bordo/90 transition-all duration-300 shadow-lg hover:shadow-bordo/20 hover:-translate-y-1 rounded-sm">
                    Agende uma Consulta
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/atuacao" className="inline-flex items-center justify-center px-8 py-4 border border-bordo text-bordo text-sm font-medium uppercase tracking-widest hover:bg-bordo hover:text-white transition-all duration-300 rounded-sm">
                    Saiba Mais
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-bordo/10">
                  <p className="text-sm text-grafite/40 font-light leading-relaxed tracking-wide">
                    Dra. Carolina Montenegro &nbsp;·&nbsp; CRM-PR 45316<br />
                    Clínica Médica – RQE Nº: 32336 &nbsp;·&nbsp; Cardiologia – RQE Nº: 36066
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-xl border-4 border-white/60 aspect-[3/4] w-full max-w-2xl mx-auto">
                <img
                  src={heroImg}
                  alt="Dra. Carolina Montenegro"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-champagne/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-12 -left-12 w-96 h-96 bg-pearl/40 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-40 lg:py-48 bg-white overflow-hidden text-grafite">
        {/* Background Image that covers the left half */}
        <div className="absolute inset-0 md:w-[60%] h-1/2 md:h-full z-0">
          <img
            src={secondSectionImg}
            alt="Dra. Carolina Montenegro"
            className="w-full h-full object-cover object-[center_30%] opacity-90 md:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white md:bg-gradient-to-r md:from-transparent md:to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="hidden md:block"></div> {/* Empty space for the image */}
            <div className="pt-[110%] sm:pt-[70%] md:pt-0 text-center md:text-left drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] md:drop-shadow-none">
              <h2 className="text-3xl md:text-4xl font-serif text-bordo mb-8 relative z-20">Dra. Carolina Montenegro</h2>
              <div className="bg-white/80 md:bg-transparent p-6 -m-6 rounded-2xl md:p-0 md:m-0">
                <p className="text-grafite/90 leading-relaxed mb-6 font-light text-lg">
                  Graduada pela PUCPR e com residência em Clínica Médica e Cardiologia, me especializei em Insuficiência Cardíaca Avançada e Transplante Cardíaco no InCor-HCFMUSP, serviço de referência na América Latina.
                </p>
                <p className="text-grafite/90 leading-relaxed mb-8 font-light text-lg">
                  Minha trajetória inclui também experiência internacional no Baylor Scott & White Health (Dallas, EUA), trazendo o que há de mais atual para o tratamento dos meus pacientes.
                </p>
                <Link to="/sobre" className="text-bordo font-medium uppercase tracking-wider text-sm border-b border-bordo/30 pb-1 hover:border-bordo transition-colors inline-flex items-center gap-2 group">
                  Conheça minha trajetória
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-40 lg:py-48 bg-gradient-to-br from-[#6B0020] via-[#4A0016] to-[#1E0008] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Missão, Visão e Valores</h2>
            <div className="w-16 h-[1px] bg-champagne/50 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white/95 rounded-xl p-10 flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-bordo/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-bordo" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-bordo mb-4">Missão</h3>
                <p className="text-grafite/70 font-light leading-relaxed">
                  Oferecer às pessoas o cuidado cardiológico que elas merecem: preciso, humano e baseado no que existe de mais avançado na medicina. Minha missão é estar ao lado de cada paciente, lutando pela sua vida e pelo seu bem-estar, em cada etapa da jornada.
                </p>
              </div>
            </motion.div>

            {/* Valores — ocupa 2 linhas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/95 rounded-xl p-10 flex flex-col gap-6 md:row-span-2"
            >
              <div className="w-12 h-12 rounded-full border border-bordo/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-bordo" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-bordo mb-6">Valores</h3>
                <ul className="space-y-6">
                  {[
                    { title: 'Excelência técnica', desc: 'Busco o melhor conhecimento disponível para oferecer o melhor cuidado possível. Formação contínua não é diferencial, é obrigação.' },
                    { title: 'Transparência', desc: 'Acredito que o paciente bem informado é um paciente mais seguro. Explico cada etapa do tratamento com clareza, sem jargões desnecessários.' },
                    { title: 'Individualização', desc: 'Cada paciente é único. O cuidado que ofereço é adaptado à história, à realidade e aos objetivos de cada pessoa.' },
                    { title: 'Humanização', desc: 'Por trás de cada diagnóstico há uma pessoa, uma família, uma história. Considero sempre o ser humano inteiro, não apenas o coração.' },
                  ].map((v, i) => (
                    <li key={i} className="text-grafite/70 font-light leading-relaxed">
                      <span className="font-semibold text-bordo">{v.title}</span> — {v.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/95 rounded-xl p-10 flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-bordo/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-bordo" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-bordo mb-4">Visão</h3>
                <p className="text-grafite/70 font-light leading-relaxed">
                  Ser reconhecida como cardiologista de referência em Curitiba. Quero construir uma prática em que cada paciente encontre cuidado especializado e de excelência, e na qual a busca pelo melhor tratamento nunca seja negociável.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties / Features */}
      <section className="py-40 lg:py-48 bg-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-serif text-bordo mb-6">Áreas de Atuação</h2>
            <div className="w-16 h-[1px] bg-champagne mx-auto mb-8"></div>
            <p className="text-grafite/70 font-light text-lg">
              Diagnóstico, tratamento e acompanhamento de condições cardíacas complexas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-12">
            {[
              {
                icon: <Heart className="w-8 h-8 text-bordo" />,
                title: 'Insuficiência Cardíaca',
                description: 'Acompanhamento especializado para pacientes com alteração da função cardíaca. Foco na melhora da qualidade de vida e estabilidade clínica.'
              },
              {
                icon: <Activity className="w-8 h-8 text-bordo" />,
                title: 'Transplante Cardíaco',
                description: 'Avaliação pré-transplante e acompanhamento pós-operatório rigoroso para pacientes transplantados.'
              },
              {
                icon: <Clock className="w-8 h-8 text-bordo" />,
                title: 'Cardiologia Geral',
                description: 'Prevenção, check-up e tratamento de doenças cardiovasculares comuns com olhar atento e preventivo.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-12 rounded-xl shadow-sm border border-pearl hover:border-champagne/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-offwhite rounded-full flex items-center justify-center mb-8 group-hover:bg-bordo/5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-grafite mb-6 group-hover:text-bordo transition-colors">{feature.title}</h3>
                <p className="text-grafite/60 leading-relaxed font-light text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/atuacao" className="inline-block px-8 py-3 border border-grafite/20 text-grafite text-sm uppercase tracking-widest hover:bg-grafite hover:text-white transition-all duration-300 rounded-sm">
              Veja os Detalhes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Locations Section */}
      <section className="py-40 lg:py-48 bg-gradient-to-br from-[#590016] to-[#2D000B] text-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-white">
              Onde Atendo
            </h2>
            <div className="w-20 h-[1px] bg-white/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 lg:gap-6 mb-20">
            {/* Consultório — col-span-2 (linha 1) */}
            <div className="md:col-span-2 bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors min-h-[220px]">
              <h3 className="text-xl font-serif mb-4 text-champagne">{CONSULTORIO.name}</h3>
              <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
                {CONSULTORIO.street}<br />
                {CONSULTORIO.city}<br />
                {CONSULTORIO.cep}
              </p>
              <div className="text-sm text-white/90 font-medium">
                <a href={CONSULTORIO.phoneTel} className="block hover:text-champagne transition-colors mb-1">Tel: {CONSULTORIO.phone}</a>
                <a href={CONSULTORIO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-champagne transition-colors">WhatsApp: {CONSULTORIO.whatsappPhone}</a>
              </div>
            </div>

            {/* Hospitals — índice 0 e 1: col-span-2 (linha 1); índice 2: col-span-3 (linha 2) */}
            {HOSPITALS.map((hospital, idx) => (
              <div key={hospital.id} className={`${idx < 2 ? 'md:col-span-2' : 'md:col-span-3'} bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors min-h-[220px]`}>
                <h3 className="text-xl font-serif mb-4 text-champagne">{hospital.name}</h3>
                <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
                  {hospital.street}<br />
                  {hospital.city}<br />
                  {hospital.cep}
                </p>
                <div className="text-sm text-white/90 font-medium flex flex-col gap-1">
                  {hospital.showPhone && (
                    <a href={hospital.phoneTel} className="hover:text-champagne transition-colors">Tel: {hospital.phone}</a>
                  )}
                  <a href={hospital.website} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-champagne transition-colors font-light text-sm break-all">{hospital.website.replace('https://', '')}</a>
                </div>
              </div>
            ))}

            {/* Teleconsulta — col-span-3 (linha 2) */}
            <div className="md:col-span-3 bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors min-h-[220px]">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-5 h-5 text-champagne shrink-0" />
                <h3 className="text-xl font-serif text-champagne">Teleconsulta</h3>
              </div>
              <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
                Atendimento por teleconsulta para pacientes do Brasil e exterior.
              </p>
              <div className="text-sm text-white/90 font-medium">
                <a href={TELECONSULTA_WA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-champagne transition-colors">WhatsApp: {TELECONSULTA_WA.phone}</a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contato" className="inline-flex items-center justify-center px-10 py-4 bg-white text-bordo text-base font-medium uppercase tracking-widest hover:bg-champagne transition-all shadow-xl rounded-sm">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
