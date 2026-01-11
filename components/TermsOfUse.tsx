import React, { useEffect } from 'react';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-lite-dark pt-24 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl bg-lite-surface p-8 md:p-12 border border-lite-metal/20 shadow-2xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 uppercase border-b border-lite-neon/30 pb-4">
          Termos de Uso
        </h1>

        <div className="space-y-6 text-slate-300 font-sans leading-relaxed text-sm md:text-base text-justify">
          <p>
            Bem-vindo ao <strong>SITECODEX</strong>. Ao acessar nosso site e utilizar nossos serviços, você concorda em cumprir e estar vinculado aos seguintes Termos e Condições de Uso. Caso não concorde com qualquer parte destes termos, você não deve utilizar nossos serviços.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">1. Definições</h2>
          <ul className="list-disc pl-5 space-y-2 marker:text-lite-neon">
            <li><strong>Serviço:</strong> Refere-se à criação de landing pages, sites institucionais, catálogos digitais e serviços correlatos oferecidos pelo SITECODEX.</li>
            <li><strong>Usuário/Cliente:</strong> Qualquer pessoa física ou jurídica que acesse o site ou contrate os serviços do SITECODEX.</li>
          </ul>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste site (textos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados) é de propriedade exclusiva do SITECODEX ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais internacionais e do Brasil.
          </p>
          <p>
            <strong>Sobre os Serviços Contratados:</strong> Após a entrega e pagamento integral do serviço contratado (ex: Landing Page), o Cliente recebe o direito de uso vitalício do produto final. A propriedade intelectual do código-fonte base e metodologias de desenvolvimento permanece com o SITECODEX, salvo acordo contratual específico em contrário.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">3. Responsabilidades do Usuário</h2>
          <p>
            O Usuário concorda em utilizar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros, nem restrinja ou iniba o uso e o aproveitamento do site por qualquer outra pessoa. O comportamento proibido inclui assediar ou causar angústia ou inconveniência a qualquer pessoa, transmitir conteúdo obsceno ou ofensivo ou interromper o fluxo normal de diálogo dentro do nosso site.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">4. Limitação de Responsabilidade</h2>
          <p>
            O SITECODEX não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar este site ou seus serviços.
          </p>
          <p>
            Embora nos esforcemos para garantir que as informações neste site estejam corretas, não garantimos sua integridade ou precisão; nem nos comprometemos a garantir que o site permaneça disponível ou que o material no site seja mantido atualizado.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">5. Links para Terceiros</h2>
          <p>
            Nosso site pode conter links para sites de terceiros que não são controlados por nós. Não temos controle sobre, e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">6. Modificações dos Termos</h2>
          <p>
            O SITECODEX reserva-se o direito de revisar estes termos a qualquer momento sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes Termos e Condições de Uso.
          </p>

          <h2 className="text-xl font-bold text-lite-neon mt-8 mb-2">7. Lei Aplicável e Foro</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis da República Federativa do Brasil.
          </p>
          <p className="border-l-4 border-lite-neon pl-4 py-2 my-4 bg-lite-dark/50 italic">
            Fica eleito o <strong>Foro da Comarca de Goiânia, Estado de Goiás</strong>, como o único competente para dirimir quaisquer questões ou disputas oriundas destes Termos de Uso, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
          </p>

          <p className="mt-8 pt-8 border-t border-lite-metal/20 text-lite-metal text-sm">
            Última atualização: <strong>Dezembro de 2024</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;