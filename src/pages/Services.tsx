import React, { useState } from 'react';
import { TELECONSULTA_WA } from '../data/locations';
import { motion } from 'motion/react';
import { Heart, Activity, ChevronDown, ChevronUp, Stethoscope, ClipboardCheck, Cpu, UserCheck } from 'lucide-react';
import logoBordo from '../assets/logos/logo-bordo.png';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Quais condições cardíacas você trata?",
      answer: "Atendo pacientes com diversas condições cardiovasculares, como insuficiência cardíaca, cardiomiopatias, hipertensão arterial, arritmias, doença coronariana e valvopatias. Tenho formação avançada em insuficiência cardíaca e transplante cardíaco, o que me permite acompanhar casos de maior complexidade."
    },
    {
      question: "O que é Insuficiência Cardíaca e quais são os sintomas?",
      answer: "Insuficiência cardíaca é uma condição em que o coração perde a capacidade de bombear sangue de forma eficiente para o organismo. Os sintomas mais comuns são falta de ar — especialmente aos esforços ou ao deitar —, inchaço nas pernas, cansaço excessivo e dificuldade para realizar atividades do dia a dia. O diagnóstico precoce e o acompanhamento especializado são fundamentais para controlar a doença e preservar a qualidade de vida."
    },
    {
      question: "Quando devo procurar um cardiologista?",
      answer: "Recomendo consultar um cardiologista se você apresenta sintomas como falta de ar, dor ou pressão no peito, palpitações, tontura ou inchaço nas pernas. Também é importante buscar avaliação se você tem fatores de risco como hipertensão, diabetes, colesterol elevado, histórico familiar de doença cardíaca ou sedentarismo — mesmo sem sintomas."
    },
    {
      question: "Como funciona uma primeira consulta?",
      answer: "A primeira consulta tem duração de 60 minutos e é estruturada para oferecer uma avaliação completa e individualizada. Inclui investigação das queixas, histórico médico, uso de medicamentos e hábitos de vida, exame físico cardiovascular, análise dos exames disponíveis e recomendações baseadas nas diretrizes médicas mais atuais, sempre adaptadas à realidade e aos objetivos de cada paciente."
    },
    {
      question: "Quais exames devo levar na primeira consulta?",
      answer: "Traga todos os exames que você já realizou, especialmente eletrocardiogramas, ecocardiogramas, exames de sangue recentes e laudos de outros especialistas. Não se preocupe caso não tenha nenhum — a avaliação clínica já é suficiente para começarmos e, se necessário, solicitarei os exames durante a consulta."
    },
    {
      question: "Quais exames são feitos no acompanhamento cardiológico?",
      answer: "Os exames variam conforme a condição de cada paciente. Os mais utilizados no acompanhamento são eletrocardiograma, ecocardiograma, exames de sangue, teste ergométrico e holter. Em casos mais complexos, podem ser indicados exames como ressonância cardíaca ou cateterismo. Tudo é solicitado de forma individualizada, conforme a necessidade clínica."
    },
    {
      question: "Você atende por convênio ou particular?",
      answer: "Atendo tanto por convênio quanto de forma particular. As consultas particulares são realizadas no consultório, e os atendimentos por convênio pelo Hospital São Marcelino Champagnat. Para verificar se o seu plano é aceito, entre em contato antes de agendar."
    },
    {
      question: "Você realiza teleconsulta?",
      answer: (<span>Sim, ofereço atendimento por teleconsulta para pacientes que preferem consultar à distância, seja na primeira consulta ou no retorno. O agendamento é feito pelo WhatsApp <a href={TELECONSULTA_WA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-bordo hover:underline font-medium">{TELECONSULTA_WA.phone}</a>.</span>)
    },
    {
      question: "Como faço para marcar uma consulta?",
      answer: (<span>Você pode agendar sua consulta pelo telefone <a href="tel:+554130820069" className="text-bordo hover:underline font-medium">(41) 3082-0069</a> ou pelo WhatsApp <a href="https://wa.me/5541984216135?text=Ol%C3%A1!%20Vim%20a%20partir%20do%20site%20da%20Dra.%20Carolina%20Montenegro.%20Gostaria%20de%20marcar%20uma%20consulta!" target="_blank" rel="noopener noreferrer" className="text-bordo hover:underline font-medium">(41) 98421-6135</a>. Para atendimentos por convênio, o agendamento é feito diretamente pelo Hospital São Marcelino Champagnat pelo WhatsApp <a href="https://wa.me/554130877600?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Dra.%20Carolina%20Montenegro.%20Gostaria%20de%20marcar%20uma%20consulta." target="_blank" rel="noopener noreferrer" className="text-bordo hover:underline font-medium">(41) 3087-7600</a>.</span>)
    }
  ];

  const services = [
    {
      icon: <Heart size={32} />,
      title: "Insuficiência Cardíaca",
      description: "Diagnóstico e tratamento avançado para insuficiência cardíaca, focando na melhoria da qualidade de vida e controle dos sintomas."
    },
    {
      icon: <Activity size={32} />,
      title: "Transplante Cardíaco",
      description: "Avaliação, indicação e acompanhamento pré e pós-operatório de pacientes candidatos ao transplante cardíaco."
    },
    {
      icon: <Stethoscope size={32} />,
      title: "Cardiologia Geral",
      description: "Prevenção, diagnóstico e tratamento das principais doenças cardiovasculares, como hipertensão e dislipidemia."
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Avaliação de Risco Cardiovascular",
      description: "Avaliação de risco cardiovascular personalizada para prevenção de eventos como infarto e AVC."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Acompanhamento Pós-procedimento",
      description: "Acompanhamento clínico rigoroso após procedimentos cardíacos e cirurgias, garantindo a melhor recuperação."
    },
    {
      icon: <Cpu size={32} />,
      title: "Avaliação de Dispositivos de Suporte Circulatório",
      description: "Avaliação e manejo de dispositivos de suporte circulatório mecânico para pacientes com falência cardíaca grave."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="py-24 text-white relative overflow-hidden" style={{ background: 'linear-gradient(60deg, #6B001C, #590016, #520016)' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-8 text-white"
          >
            Atuação Especializada
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Diagnóstico preciso e tratamento avançado para condições cardíacas complexas.
          </p>
        </div>
      </div>

      {/* Services Section — intro título + cards */}
      <div className="relative overflow-hidden">
        {/* Aspas de abertura — marca d'água esquerda */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 select-none pointer-events-none z-[11]"
          style={{ fontSize: '32rem', lineHeight: 1, color: '#590016', opacity: 0.06, fontFamily: 'Georgia, serif', userSelect: 'none' }}
        >
          &#8220;
        </div>
        {/* Aspas de fechamento — marca d'água direita */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 translate-y-1/4 select-none pointer-events-none z-[11]"
          style={{ fontSize: '32rem', lineHeight: 1, color: '#590016', opacity: 0.06, fontFamily: 'Georgia, serif', userSelect: 'none' }}
        >
          &#8221;
        </div>

        {/* Intro título */}
        <div className="bg-gradient-to-b from-white to-offwhite relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-3xl md:text-4xl font-serif text-bordo leading-relaxed font-medium italic mb-6">
                A Cardiologia abrange o diagnóstico, tratamento e prevenção de doenças do coração e do sistema circulatório.
              </p>
              <p className="text-lg md:text-xl font-serif text-grafite/60 font-light italic">
                Conheça as principais áreas em que atuo para cuidar da sua saúde cardiovascular.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-offwhite py-20 pb-40 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white p-12 rounded-lg border border-pearl"
              >
                <div className="w-16 h-16 bg-offwhite rounded-full flex items-center justify-center mb-8 shadow-sm text-bordo">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-bordo mb-4">{service.title}</h3>
                <p className="text-grafite/70 leading-relaxed font-light text-justify">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative overflow-hidden py-40">
        {/* Logo marca d'água */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src={logoBordo}
            alt=""
            aria-hidden="true"
            className="h-[85%] w-auto object-contain opacity-[0.03] select-none"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-serif text-bordo mb-6">Dúvidas Frequentes</h2>
            <div className="w-16 h-[1px] bg-champagne mx-auto"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="border border-pearl rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-offwhite/50 transition-colors"
                >
                  <span className="font-medium text-grafite text-lg pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-bordo w-5 h-5 shrink-0" />
                  ) : (
                    <ChevronDown className="text-grafite/40 w-5 h-5 shrink-0" />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-0 text-grafite/70 font-light leading-relaxed border-t border-pearl/30 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
