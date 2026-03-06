import { motion } from 'motion/react';
import { Heart, Activity, ChevronDown, ChevronUp, Stethoscope, ClipboardCheck, Cpu, UserCheck } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "O que é Insuficiência Cardíaca?",
      answer: "A Insuficiência Cardíaca (IC) é uma condição em que o coração não consegue bombear sangue suficiente para atender às necessidades do corpo. Isso pode causar sintomas como falta de ar, fadiga e inchaço nas pernas. O tratamento adequado é fundamental para melhorar a qualidade de vida e a sobrevida do paciente."
    },
    {
      question: "Quais são os sintomas de Insuficiência Cardíaca?",
      answer: "Os sintomas mais comuns incluem falta de ar (especialmente ao deitar ou realizar esforços), cansaço excessivo, inchaço nos pés, tornozelos e pernas, ganho de peso rápido (devido à retenção de líquidos) e tosse persistente."
    },
    {
      question: "Quando é indicado um Transplante Cardíaco?",
      answer: "O transplante cardíaco é indicado para pacientes com Insuficiência Cardíaca avançada que não respondem mais ao tratamento clínico otimizado e que não possuem outras opções cirúrgicas viáveis. É uma decisão complexa tomada por uma equipe multidisciplinar após avaliação rigorosa."
    },
    {
      question: "Como funciona uma primeira consulta?",
      answer: "Na primeira consulta, realizamos uma avaliação completa do histórico médico, exame físico detalhado e análise de exames anteriores. O objetivo é entender a condição atual do coração, ajustar medicações se necessário e traçar um plano de tratamento personalizado."
    },
    {
      question: "Como faço para marcar uma consulta?",
      answer: "Você pode agendar uma consulta entrando em contato através do telefone ou email disponibilizados na página de contato. Atendo no Hospital Universitário Evangélico Mackenzie e em consultório particular."
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
      <div className="bg-bordo py-40 text-white relative overflow-hidden">
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

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-serif text-grafite leading-relaxed mb-12">
            "A Cardiologia abrange o diagnóstico, tratamento e prevenção de doenças do coração e do sistema circulatório. Conheça as principais áreas em que atuo para cuidar da sua saúde cardiovascular."
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="bg-offwhite py-40">
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
                <p className="text-grafite/70 leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
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
  );
}
