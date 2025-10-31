import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GroupsIcon from '@mui/icons-material/Groups'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30 text-left">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 ">Sobre a Logos Next</h2>

        <div className="w-full mx-auto mb-16">
          <p className="text-lg text-muted-foreground mb-6 ">
            A <span style={{ color: 'var(--logos-next-green)' }}>Logos Next</span> é uma consultoria de tecnologia e automação que transforma desafios operacionais em eficiência mensurável.
          </p>
          <p className="text-lg text-muted-foreground mb-6 ">
            Unimos <span style={{ color: 'var(--logos-next-green)' }}>estratégia, arquitetura de sistemas e inteligência artificial</span> para automatizar processos, integrar soluções e gerar resultados reais para empresas que buscam escalar com tecnologia.
          </p>
          <p className="text-lg text-muted-foreground ">
            Nosso propósito é simples: <span style={{ color: 'var(--logos-next-green)' }}>reduzir o esforço manual e aumentar a performance</span> por meio de soluções inteligentes, sustentáveis e sob medida para cada negócio.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <EmojiEventsIcon sx={{ fontSize: 32, color: 'var(--logos-next-green)' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excelência</h3>
            <p className="text-muted-foreground">Buscamos sempre a máxima qualidade técnica e operacional, aplicando as melhores práticas do mercado em cada solução entregue.</p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <GroupsIcon sx={{ fontSize: 32, color: 'var(--logos-next-green)' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Parceria</h3>
            <p className="text-muted-foreground">Atuamos lado a lado com nossos clientes, entendendo seus processos e objetivos para construir soluções realmente personalizadas.</p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <CenterFocusStrongIcon sx={{ fontSize: 32, color: 'var(--logos-next-green)' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Foco em Resultados</h3>
            <p className="text-muted-foreground">Cada automação é pensada para gerar impacto real — mais eficiência, menos retrabalho e ganhos mensuráveis de produtividade.</p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <TrendingUpIcon sx={{ fontSize: 32, color: 'var(--logos-next-green)' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Inovação</h3>
            <p className="text-muted-foreground">Estamos sempre na fronteira da tecnologia, explorando novas ferramentas e metodologias para impulsionar o crescimento dos nossos clientes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
