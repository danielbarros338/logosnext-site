
import continuidadeBg from '@/public/imgs/conceito-de-homens-de-negocios-de-aperto-de-mao.webp'
import dadosBg from '@/public/imgs/funcionario-que-trabalha-num-ambiente-de-comercializacao.webp'
import automacaoBg from '@/public/imgs/fundo-humano-aperto-de-mao-robo-era-digital-futurista.webp'
import consultoriaBg from '@/public/imgs/investidores-ler-papelada-de-fabrica-no-portatil-rever-as-demonstracoes-financeiras.webp'
import CodeIcon from '@mui/icons-material/Code'
import InsightsIcon from '@mui/icons-material/Insights'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import ServiceCard from './ServiceCard'

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient-overlay" aria-hidden />
      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
          Da <span style={{ color: 'var(--logos-next-green)' }}>estratégia à automação</span>, impulsionamos empresas em qualquer estágio da <span style={{ color: 'var(--logos-next-green)' }}>transformação digital</span>.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <ServiceCard
            title="Consultoria &amp; Desenvolvimento"
            description={`Transformamos estratégia em produto digital. Desenvolvemos soluções que organizam, conectam e dão velocidade aos seus processos — prontas para escalar junto com o crescimento do negócio.`}
            features={[
              'Fábrica de Software (end-to-end)',
              'Web & APIs com qualidade de engenharia',
              'Arquitetura orientada ao domínio',
              'Automação de processos críticos'
            ]}
            backgroundImage={consultoriaBg}
            icon={<CodeIcon />}
          />

          <ServiceCard
            title="Automação & Integração"
            description={`Menos tarefas manuais, mais tempo para crescer. Conectamos sistemas e automatizamos rotinas para eliminar gargalos e aumentar a eficiência operacional da sua equipe.`}
            features={[
              'Automação de processos internos e administrativos',
              'Integração entre plataformas e sistemas legados',
              'RPA e bots inteligentes quando necessário',
              'Dashboards e indicadores de performance'
            ]}
            backgroundImage={automacaoBg}
            icon={<SyncAltIcon />}
          />

          <ServiceCard
            title="Continuidade de Negócios"
            description={`Operação estável, segura e sempre disponível. Garantimos que sua empresa funcione com alta performance e zero interrupção, através de infraestrutura moderna e monitoramento constante.`}
            features={[
              'Suporte dedicado e proativo',
              'Gestão de infraestrutura e DevOps',
              'Monitoramento e observabilidade contínuos',
              'Planos de contingência e recuperação'
            ]}
            backgroundImage={continuidadeBg}
            icon={<SupportAgentIcon />}
          />

          <ServiceCard
            title="Dados, IA & Analytics"
            description={`Decisões inteligentes com base em dados reais. Transformamos informações dispersas em insights estratégicos que orientam decisões e impulsionam o crescimento.`}
            features={[
              'Modelagem e governança de dados',
              'Data pipelines e integrações',
              'Relatórios executivos e dashboards',
              'Aplicações práticas de IA e automação cognitiva'
            ]}
            backgroundImage={dadosBg}
            icon={<InsightsIcon />}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
