// Trigger deploy 1
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

const SITE_URL = 'https://carolinamontenegro.com.br';

// SEO de cada rota do SPA. Para cada uma geramos um index.html físico no build,
// para que o GitHub Pages responda HTTP 200 (e não 404) quando o Google acessar
// a URL diretamente. O React Router assume a renderização a partir daí.
const ROUTES: Record<string, { title: string; description: string }> = {
  sobre: {
    title: 'Sobre a Dra. Carolina Montenegro | Cardiologista em Curitiba',
    description:
      'Conheça a trajetória da Dra. Carolina Montenegro: residência em Cardiologia (UFPR) e em Insuficiência Cardíaca e Transplante (InCor–HCFMUSP). Cardiologia de alta complexidade em Curitiba.',
  },
  atuacao: {
    title: 'Atuação | Dra. Carolina Montenegro - Cardiologista em Curitiba',
    description:
      'Áreas de atuação da Dra. Carolina Montenegro: insuficiência cardíaca, cardiomiopatias, hipertensão, arritmias e transplante cardíaco. Tire suas dúvidas e agende sua consulta.',
  },
  contato: {
    title: 'Contato | Dra. Carolina Montenegro - Cardiologista em Curitiba',
    description:
      'Agende sua consulta com a Dra. Carolina Montenegro. Locais de atendimento em Curitiba, telefone, WhatsApp e teleconsulta.',
  },
};

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

// Gera dist/<rota>/index.html para cada rota, a partir do index.html principal,
// ajustando title, description, canonical e tags Open Graph/Twitter.
function spaRouteHtmlPlugin(): Plugin {
  return {
    name: 'spa-route-html',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;
      const baseHtml = fs.readFileSync(indexPath, 'utf-8');

      for (const [route, meta] of Object.entries(ROUTES)) {
        const url = `${SITE_URL}/${route}`;
        const title = escapeAttr(meta.title);
        const description = escapeAttr(meta.description);

        const html = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(
            /(<meta name="description" content=")[\s\S]*?("\s*\/>)/,
            `$1${description}$2`,
          )
          .replace(
            /(<link rel="canonical" href=")[\s\S]*?("\s*\/>)/,
            `$1${url}$2`,
          )
          .replace(
            /(<meta property="og:url" content=")[\s\S]*?("\s*\/>)/,
            `$1${url}$2`,
          )
          .replace(
            /(<meta property="og:title" content=")[\s\S]*?("\s*\/>)/,
            `$1${title}$2`,
          )
          .replace(
            /(<meta property="og:description"\s*content=")[\s\S]*?("\s*\/>)/,
            `$1${description}$2`,
          )
          .replace(
            /(<meta property="twitter:url" content=")[\s\S]*?("\s*\/>)/,
            `$1${url}$2`,
          )
          .replace(
            /(<meta property="twitter:title" content=")[\s\S]*?("\s*\/>)/,
            `$1${title}$2`,
          )
          .replace(
            /(<meta property="twitter:description"\s*content=")[\s\S]*?("\s*\/>)/,
            `$1${description}$2`,
          );

        const routeDir = path.join(distDir, route);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      }
    },
  };
}

export default defineConfig({
    base: '/',
    plugins: [react(), tailwindcss(), spaRouteHtmlPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
});
