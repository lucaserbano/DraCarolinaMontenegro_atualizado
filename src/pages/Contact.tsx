import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import photoContact from '../assets/images/foto para sobre.jpeg';
import logoHUC from '../assets/Logo hospitais/2c446ea1-1830-4f46-bf4e-6644feb5bfb3-cajuru.png';
import logoHMC from '../assets/Logo hospitais/logo_horiz_color-1024x343.png';
import logoHUEM from '../assets/Logo hospitais/images-2.png';
import logoCM from '../assets/logos/logo-bordo.png';

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
                  <h3 className="text-xl font-serif text-grafite mb-3">Consultório Particular</h3>
                  <p className="text-grafite/70 font-light leading-relaxed mb-2">
                    Rua Emiliano Perneta, 860, 17º andar, sala 1.701<br />
                    Centro, Curitiba - PR, 80010-050
                  </p>
                  <div className="flex flex-col gap-1 text-grafite/80 font-medium mt-3">
                    <span className="flex items-center gap-2"><Phone size={16} /> (41) 3082-0069</span>
                    <span className="flex items-center gap-2"><Phone size={16} /> WhatsApp: (41) 98421-6135</span>
                  </div>
                </div>
              </div>

              {/* Hospital Marcelino Champagnat */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-offwhite rounded-full flex items-center justify-center flex-shrink-0 text-bordo border border-pearl group-hover:border-bordo transition-colors">
                  <div className="text-xs font-bold">HMC</div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-grafite mb-3">Hospital Marcelino Champagnat</h3>
                  <p className="text-grafite/70 font-light leading-relaxed mb-2">
                    Av. Presidente Affonso Camargo, 1399<br />
                    Cristo Rei, Curitiba - PR, 80050-370
                  </p>
                  <div className="flex flex-col gap-1 text-grafite/80 font-medium mt-3">
                    <span className="flex items-center gap-2"><Phone size={16} /> (41) 3087-7600</span>
                  </div>
                </div>
              </div>

              {/* Hospital Universitário Cajuru */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-offwhite rounded-full flex items-center justify-center flex-shrink-0 text-bordo border border-pearl group-hover:border-bordo transition-colors">
                  <div className="text-xs font-bold">HUC</div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-grafite mb-3">Hospital Universitário Cajuru</h3>
                  <p className="text-grafite/70 font-light leading-relaxed mb-2">
                    Av. São José, 300<br />
                    Cristo Rei, Curitiba - PR, 80050-350
                  </p>
                  <div className="flex flex-col gap-1 text-grafite/80 font-medium mt-3">
                    <span className="flex items-center gap-2"><Phone size={16} /> (41) 3271-3000</span>
                  </div>
                </div>
              </div>

              {/* Hospital Universitário Evangélico Mackenzie */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-offwhite rounded-full flex items-center justify-center flex-shrink-0 text-bordo border border-pearl group-hover:border-bordo transition-colors">
                  <div className="text-xs font-bold">HUEM</div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-grafite mb-3">Hospital Universitário Evangélico Mackenzie</h3>
                  <p className="text-grafite/70 font-light leading-relaxed mb-2">
                    Alameda Augusto Stellfeld, 1908<br />
                    Bigorrilho, Curitiba - PR, 80730-150
                  </p>
                  <div className="flex flex-col gap-1 text-grafite/80 font-medium mt-3">
                    <span className="flex items-center gap-2"><Phone size={16} /> (41) 3240-5000</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photo Placeholder & Logos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Doctor Photo Placeholder */}
            <div className="aspect-[3/4] bg-pearl/20 rounded-lg overflow-hidden border border-pearl shadow-sm relative">
              <img
                src={photoContact}
                alt="Dra. Carolina Montenegro"
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-bordo/95 via-bordo/60 to-transparent p-8 flex flex-col justify-end">
                <p className="text-white font-serif text-xl">Dra. Carolina Montenegro</p>
                <p className="text-white/80 text-sm uppercase tracking-widest">Cardiologista</p>
              </div>
            </div>

            {/* Hospital Logos Placeholders */}
            <div className="grid grid-cols-2 gap-6">
              <div className="h-20 md:h-24 bg-white border border-pearl hover:border-bordo/30 transition-colors rounded p-3 md:p-4 flex items-center justify-center">
                <img src={logoHMC} alt="Hospital Marcelino Champagnat" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="h-20 md:h-24 bg-white border border-pearl hover:border-bordo/30 transition-colors rounded p-3 md:p-4 flex items-center justify-center">
                <img src={logoHUC} alt="Hospital Universitário Cajuru" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="h-20 md:h-24 bg-white border border-pearl hover:border-bordo/30 transition-colors rounded p-3 md:p-4 flex items-center justify-center">
                <img src={logoHUEM} alt="Hospital Universitário Evangélico Mackenzie" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="h-24 md:h-32 bg-white border border-pearl hover:border-bordo/30 transition-colors rounded p-4 md:p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={logoCM}
                  alt="Consultório Dra. Carolina Montenegro"
                  className="h-full w-auto object-contain max-w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Welcoming Phrase */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <div className="w-24 h-[1px] bg-bordo/20 mx-auto mb-10"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-bordo leading-relaxed italic max-w-3xl mx-auto">
            "Todo coração merece ser mais forte! Aguardo sua visita para melhorar a sua saúde e bem-estar."
          </h2>
        </div>
      </div>
    </div>
  );
}
