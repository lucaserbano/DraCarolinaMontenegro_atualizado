import { motion } from 'motion/react';
import { ArrowRight, Heart, Activity, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/foto para hero2.jpeg';
import secondSectionImg from '../assets/images/WhatsApp Image 2026-03-03 at 14.10.59.jpeg';

export default function Home() {
  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-40 lg:py-48">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Placeholder for a high-quality medical background or abstract texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-offwhite via-white to-pearl opacity-80"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#fcfbfb] -skew-x-12 translate-x-1/3"></div>
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
                    Agendar Consulta
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/atuacao" className="inline-flex items-center justify-center px-8 py-4 border border-bordo text-bordo text-sm font-medium uppercase tracking-widest hover:bg-bordo hover:text-white transition-all duration-300 rounded-sm">
                    Saiba Mais
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] w-full max-w-2xl mx-auto">
                {/* Placeholder for Dra. Carolina's photo */}
                <img
                  src={heroImg}
                  alt="Dra. Carolina Montenegro"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-champagne/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-12 -left-12 w-96 h-96 bg-bordo/10 rounded-full blur-3xl -z-10"></div>
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
            referrerPolicy="no-referrer"
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

      {/* Specialties / Features */}
      <section className="py-40 lg:py-48 bg-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-serif text-bordo mb-6">Áreas de Atuação</h2>
            <div className="w-16 h-[1px] bg-champagne mx-auto mb-8"></div>
            <p className="text-grafite/70 font-light text-lg lg:whitespace-nowrap">
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
                animate={{ opacity: 1, y: 0 }}
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
              Ver Detalhes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Locations Section */}
      <section className="py-40 lg:py-48 bg-gradient-to-br from-[#590016] to-[#2D000B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Abstract pattern placeholder */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-white">
              Onde Atendo
            </h2>
            <div className="w-20 h-[1px] bg-white/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10 mb-20">
            {/* Consultório */}
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-serif mb-4 text-champagne">Consultório</h3>
              <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
                Rua Emiliano Perneta, 860, 17º andar, sala 1.701<br />
                Centro, Curitiba - PR<br />
                80010-050
              </p>
              <div className="text-sm text-white/90 font-medium">
                <a href="tel:+554130820069" className="block hover:text-champagne transition-colors mb-1">Tel: (41) 3082-0069</a>
                <a href="https://wa.me/5541984216135?text=Ol%C3%A1!%20Vim%20a%20partir%20do%20site%20da%20Dra.%20Carolina%20Montenegro.%20Gostaria%20de%20marcar%20uma%20consulta!" target="_blank" rel="noopener noreferrer" className="block hover:text-champagne transition-colors">WhatsApp: (41) 98421-6135</a>
              </div>
            </div>

            {/* Hospital Marcelino Champagnat */}
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-serif mb-4 text-champagne">Hospital Marcelino Champagnat</h3>
              <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
                Av. Presidente Affonso Camargo, 1399<br />
                Cristo Rei, Curitiba - PR<br />
                80050-370
              </p>
              <div className="text-sm text-white/90 font-medium">
                <a href="tel:+554130877600" className="block hover:text-champagne transition-colors mb-1">Tel: (41) 3087-7600</a>
              </div>
            </div>

            {/* Hospital Universitário Cajuru */}
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-serif mb-4 text-champagne">Hospital Universitário Cajuru</h3>
              <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
                Av. São José, 300<br />
                Cristo Rei, Curitiba - PR<br />
                80050-350
              </p>
              <div className="text-sm text-white/90 font-medium">
                <a href="tel:+554132713000" className="block hover:text-champagne transition-colors mb-1">Tel: (41) 3271-3000</a>
              </div>
            </div>

            {/* Hospital Universitário Evangélico Mackenzie */}
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-serif mb-4 text-champagne">Hospital Universitário Evangélico Mackenzie</h3>
              <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
                Alameda Augusto Stellfeld, 1908<br />
                Bigorrilho, Curitiba - PR<br />
                80730-150
              </p>
              <div className="text-sm text-white/90 font-medium">
                <a href="tel:+554132405000" className="block hover:text-champagne transition-colors mb-1">Tel: (41) 3240-5000</a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contato" className="inline-flex items-center justify-center px-10 py-4 bg-white text-bordo text-base font-medium uppercase tracking-widest hover:bg-champagne transition-all shadow-xl rounded-sm">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
