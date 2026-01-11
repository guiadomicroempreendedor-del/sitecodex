import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-lite-dark pt-24 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl bg-lite-surface p-8 md:p-12 border border-lite-metal/20 shadow-2xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 uppercase border-b border-lite-neon/30 pb-4">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-slate-300 font-sans leading-relaxed text-sm md:text-base text-justify">
          <p>
            Esta Política de Privacidade descreve como o <strong>SITECODEX</strong> ("nós", "nosso") coleta, usa, armazena e protege as informações pessoais dos usuários ("você") ao acessar nosso site e utilizar nossos serviços de desenvolvimento web.
          </p>
          <p>
            Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política. Estamos em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> do Brasil.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">1. Coleta de Dados</h2>
          <p>
            Coletamos informações que você nos fornece diretamente e informações coletadas automaticamente quando você navega em nosso site:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-lite-neon">
            <li><strong>Dados fornecidos por você:</strong> Nome, endereço de e-mail, número de telefone (WhatsApp) e descrição da solicitação ao preencher nossos formulários de contato ou orçamento.</li>
            <li><strong>Dados de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo gasto em cada página e outros dados analíticos para fins de melhoria de performance e segurança.</li>
          </ul>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">2. Finalidade do Tratamento de Dados</h2>
          <p>
            Utilizamos seus dados pessoais para as seguintes finalidades:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-lite-neon">
            <li><strong>Prestação de Serviços:</strong> Para responder a dúvidas, processar orçamentos e entregar os serviços contratados (criação de sites e landing pages).</li>
            <li><strong>Comunicação:</strong> Para entrar em contato via WhatsApp ou e-mail sobre o andamento de projetos ou novas ofertas relevantes.</li>
            <li><strong>Melhoria do Site:</strong> Para analisar como os usuários interagem com nosso site e corrigir problemas técnicos.</li>
          </ul>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">3. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Utilizamos cookies para melhorar a experiência de navegação e analisar o tráfego do site.
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-lite-neon">
            <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
            <li><strong>Cookies de Desempenho e Análise:</strong> Permitem entender como os visitantes interagem com o site (ex: Google Analytics). As informações são coletadas de forma anônima.</li>
            <li><strong>Cookies de Publicidade:</strong> Podem ser utilizados por parceiros terceiros (como o Google Ads) para exibir anúncios relevantes baseados em suas visitas anteriores.</li>
          </ul>
          <p>
            Você pode configurar seu navegador para recusar todos ou alguns cookies, mas isso pode afetar a funcionalidade de partes do site.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">4. Compartilhamento de Dados</h2>
          <p>
            O SITECODEX <strong>não vende, aluga ou comercializa</strong> seus dados pessoais para terceiros. Podemos compartilhar dados apenas nas seguintes circunstâncias:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-lite-neon">
            <li>Com prestadores de serviço terceirizados que nos ajudam a operar o site (ex: hospedagem, ferramentas de análise), sob obrigações de confidencialidade.</li>
            <li>Para cumprir obrigações legais ou ordens judiciais.</li>
          </ul>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">5. Segurança dos Dados</h2>
          <p>
            Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra perda, roubo e acesso não autorizado. No entanto, lembre-se que nenhum método de transmissão pela Internet é 100% seguro.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">6. Seus Direitos (LGPD)</h2>
          <p>
            Conforme a Lei Geral de Proteção de Dados, você tem direito a:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-lite-neon">
            <li>Confirmar a existência de tratamento de seus dados.</li>
            <li>Acessar os dados que possuímos sobre você.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a eliminação dos dados pessoais (exceto quando a manutenção for necessária por lei).</li>
          </ul>
          <p>
            Para exercer seus direitos, entre em contato através dos canais disponíveis no site.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">7. Alterações nesta Política</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para quaisquer alterações. As alterações entram em vigor imediatamente após serem publicadas nesta página.
          </p>

          <p className="mt-8 pt-8 border-t border-lite-metal/20 text-lite-metal text-sm">
            Última atualização: <strong>Dezembro de 2024</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;