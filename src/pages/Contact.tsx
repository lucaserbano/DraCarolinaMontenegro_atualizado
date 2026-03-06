import { motion } from 'motion/react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import photoContact from '../assets/images/foto para sobre.jpeg';
import logoHUC from '../assets/Logo hospitais/2c446ea1-1830-4f46-bf4e-6644feb5bfb3-cajuru.png';
import logoHMC from '../assets/Logo hospitais/logo_horiz_color-1024x343.png';
import logoHUEM from '../assets/Logo hospitais/images-2.png';
import logoCM from '../assets/logos/logo-bordo.png';
import { CONSULTORIO, HOSPITALS } from '../data/locations';

const hospitalLogos: Record<string, string> = {
  hmc: logoHMC,
  huc: logoHUC,
  huem: logoHUEM,
};

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-bordo mb-8">Entre em Contato</h1>
            <p className="text-lg text-grafite/70 mb-16 leading-relaxed font-light">
              Estamos à disposição para agendar sua consulta ou esclarecer dúvidas. Confira abaixo nossos locais de atendimento e canais diretos.
            </p>

            <div className="space-y-12">
              {/* Consultório */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-offwhite rounded-full flex items-center justify-center flex-shrink-0 text-bordo border border-pearl group-hover:border-bordo transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-grafite mb-3">{CONSULTORIO.name}</h3>
                  <p className="text-grafite/70 font-light leading-relaxed mb-2">
                    {CONSULTORIO.street}<br />
                    {CONSULTORIO.city}, {CONSULTORIO.cep}
                  </p>
                  <div className="flex flex-col gap-1 text-grafite/80 font-medium mt-3">
                    <a href={CONSULTORIO.phoneTel} className="flex items-center gap-2 hover:text-bordo transition-colors">
                      <Phone size={16} /> {CONSULTORIO.phone}
                    </a>
                    <a href={CONSULTORIO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bordo transition-colors">
                      <Phone size={16} /> WhatsApp: {CONSULTORIO.whatsappPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hospitals */}
              {HOSPITALS.map(hospital => (
                <div key={hospital.id} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-offwhite rounded-full flex items-center justify-center flex-shrink-0 text-bordo border border-pearl group-hover:border-bordo transition-colors">
                    <div className="text-xs font-bold">{hospital.abbr}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-grafite mb-3">{hospital.name}</h3>
                    <p className="text-grafite/70 font-light leading-relaxed mb-2">
                      {hospital.street}<br />
                      {hospital.city}, {hospital.cep}
                    </p>
                    <div className="flex flex-col gap-1 text-grafite/80 font-medium mt-3">
                      {hospital.showPhone && (
                        <a href={hospital.phoneTel} className="flex items-center gap-2 hover:text-bordo transition-colors">
                          <Phone size={16} /> {hospital.phone}
                        </a>
                      )}
                      <a href={hospital.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bordo transition-colors text-grafite/60 font-light text-sm">
                        <ExternalLink size={14} /> {hospital.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo & Logos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Doctor Photo */}
            <div className="aspect-[3/4] bg-pearl/20 rounded-lg overflow-hidden border border-pearl shadow-sm relative">
              <img
                src={photoContact}
                alt="Dra. Carolina Montenegro"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-bordo/95 via-bordo/60 to-transparent p-8 flex flex-col justify-end">
                <p className="text-white font-serif text-xl">Dra. Carolina Montenegro</p>
                <p className="text-white/80 text-sm uppercase tracking-widest">Cardiologista</p>
              </div>
            </div>

            {/* Hospital Logos */}
            <div className="grid grid-cols-2 gap-6">
              {HOSPITALS.map(hospital => (
                <div key={hospital.id} className="h-20 md:h-24 bg-white border border-pearl hover:border-bordo/30 transition-colors rounded p-3 md:p-4 flex items-center justify-center">
                  <img src={hospitalLogos[hospital.id]} alt={hospital.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
              <div className="h-20 md:h-24 bg-white border border-pearl hover:border-bordo/30 transition-colors rounded p-3 flex items-center justify-center overflow-hidden">
                <img
                  src={logoCM}
                  alt="Consultório Dra. Carolina Montenegro"
                  className="h-[80%] w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Welcoming Phrase */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <div className="w-24 h-[1px] bg-bordo/20 mx-auto mb-10"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-bordo leading-relaxed italic max-w-3xl mx-auto mb-4">
            "Todo coração merece ser mais forte!"
          </h2>
          <p className="text-lg md:text-xl font-serif text-grafite/50 italic font-light">
            Aguardo sua visita para melhorar a sua saúde e bem-estar.
          </p>
        </div>
      </div>
    </div>
  );
}
