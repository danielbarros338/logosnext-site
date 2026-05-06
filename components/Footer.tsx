import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-(--logos-next-service-dark) text-center text-sm text-muted-foreground py-6 space-y-2">
      <p><strong>Logos Next Consultoria LTDA</strong> </p>
      {/* <p><strong>Logos Next Tecnologia e Consultoria LTDA</strong> · CNPJ 63.182.351/0001-80</p> */}
      {/* <p>Rua Pais Leme, 215 · Conj. 1713 · Pinheiros · São Paulo/SP · CEP 05424-150</p> */}
      <p>© 2025 Logos Next · Todos os direitos reservados</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '4px' }}>
        <a href="https://www.linkedin.com/company/logos-next/" target="_blank" rel="noopener noreferrer" style={{ color: '#21D0B2', textDecoration: 'none' }} aria-label="LinkedIn">
          <LinkedInIcon fontSize="medium" />
        </a>
        <a href="https://www.instagram.com/logosnext.ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#21D0B2', textDecoration: 'none' }} aria-label="Instagram">
          <InstagramIcon fontSize="medium" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;