import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Button from '@mui/material/Button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-[calc(100vh+200px)] md:min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient-overlay" aria-hidden />
      <div className="container-custom relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-7/12 xl:w-3/5">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Acelere sua Empresa com <span style={{ color: 'var(--logos-next-green)' }}>Automação Inteligente</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Consultoria especializada em automação de processos, integração de sistemas e soluções sob medida em tecnologia para pequenas e médias empresas que buscam eficiência e crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button component="a" href="#solucoes" size="large" variant="contained">
                Nossas Soluções
              </Button> */}
              <Button
                component="a"
                href="#contato"
                size="large"
                variant="contained"
                sx={{
                  backgroundColor: 'var(--logos-next-green)',
                  color: 'var(--logos-next-dark)',
                  '&:hover': { backgroundColor: 'var(--logos-next-green)' },
                }}
              >
                Solicitar Consultoria
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-5/12 xl:w-2/5 flex justify-center lg:justify-end">
            <Image
              src="/imgs/logo.png"
              alt="Identidade visual Logos Next"
              width={420}
              height={420}
              priority
              sizes="(max-width: 1024px) 60vw, 420px"
              className="max-w-full h-auto drop-shadow-[0_20px_60px_rgba(52,245,197,0.25)]"
            />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#sobre" aria-label="Rolar para baixo">
            <KeyboardArrowDown fontSize="medium" style={{ color: 'var(--logos-next-green)' }} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
