import type { PageContent } from "@/lib/content";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import { About, Band, Features, HowItWorks, Pillars, Problems } from "./Sections";

/**
 * Estrutura comum da página inicial e das páginas de setor.
 * A home usa "setores" como âncora dos cards; as páginas de setor usam "automacoes".
 */
export default function PageTemplate({ content, featuresId }: { content: PageContent; featuresId: string }) {
  return (
    <main>
      <Hero hero={content.hero} />
      <Band items={content.band} />
      <Problems data={content.problems} />
      <HowItWorks />
      <Features data={content.features} id={featuresId} />
      <Pillars data={content.pillars} />
      <About data={content.about} />
      <Contact description={content.contact.description} defaultSector={content.contact.defaultSector} />
      <Footer />
    </main>
  );
}
