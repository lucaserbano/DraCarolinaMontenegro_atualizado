import { motion } from 'motion/react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import photoContact from '../assets/images/foto para sobre.jpeg';
import carimboBranco from '../assets/logos/carimbo-branco.png';
import { CONSULTORIO, HOSPITALS, TELECONSULTA_WA } from '../data/locations';

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-bordo mb-8">Agende sua consulta!</h1>
            <p className="text-lg text-grafite/70 mb-16 leading-relaxed font-light">
              Estou à disposição para agendar sua consulta ou esclarecer dúvidas. Confira abaixo meus locais de atendimento e canais diretos.
            </p>

            <div className="space-y-10">
              {/* Atendimentos particulares */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-bordo/60 mb-6 pb-3 border-b border-pearl">Atendimentos particulares</p>
                <div className="space-y-8">
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
                          <WhatsAppIcon size={15} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Teleconsultas */}
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-offwhite rounded-full flex items-center justify-center flex-shrink-0 text-bordo border border-pearl group-hover:border-bordo transition-colors">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-grafite mb-3">Teleconsultas</h3>
                      <p className="text-grafite/70 font-light leading-relaxed mb-2">
                        Atendimento online para todo o Brasil e exterior.
                      </p>
                      <div className="flex flex-col gap-1 text-grafite/80 font-medium mt-3">
                        <a href={TELECONSULTA_WA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bordo transition-colors">
                          <Phone size={16} /> WhatsApp: {TELECONSULTA_WA.phone}
                          <WhatsAppIcon size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Atendimentos particulares e convênios */}
              {(() => {
                const hmc = HOSPITALS.find(h => h.id === 'hmc');
                if (!hmc) return null;
                return (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-bordo/60 mb-6 pb-3 border-b border-pearl">Atendimentos particulares e convênios</p>
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-offwhite rounded-full flex items-center justify-center flex-shrink-0 text-bordo border border-pearl group-hover:border-bordo transition-colors">
                        <div className="text-xs font-bold">{hmc.abbr}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-serif text-grafite mb-3">{hmc.name}</h3>
                        <p className="text-grafite/70 font-light leading-relaxed mb-2">
                          {hmc.street}<br />
                          {hmc.city}, {hmc.cep}
                        </p>
                        <div className="flex flex-col gap-1 text-grafite/80 font-medium mt-3">
                          <a href={hmc.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bordo transition-colors">
                            <Phone size={16} /> {hmc.phone}
                            <WhatsAppIcon size={15} />
                          </a>
                          <a href={hmc.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bordo transition-colors text-grafite/60 font-light text-sm">
                            <ExternalLink size={14} /> {hmc.website.replace('https://', '')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
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
                <img
                  src={carimboBranco}
                  alt=""
                  aria-hidden="true"
                  className="absolute bottom-6 right-6 h-16 w-auto object-contain opacity-80"
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
