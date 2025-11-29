// CONSTANTS
import { HEADINGS_AND_SUBHEADINGS } from './constants/headingsAndSubheading'
import { SERVICE_CARDS } from './constants/cards/serviceCards'
import { CASE_STUDY_CARDS } from './constants/cards/caseStudyCards'
import { PROCESS_CARDS } from './constants/cards/processCards'
import { TEAM_CARDS } from './constants/cards/teamCards'

// LAYOUT-COMPONENTS
import { NavigationBar } from './components/layout/NavigationBar/NavigationBar'

// UI-COMPONENTS
import { HeadingAndSubheading } from './components/ui/HeadingAndSubheading/HeadingAndSubheading'

// BLOCKS
import { LandingPageBlock } from './components/blocks/LandingPageBlock/ui/LandingPageBlock'
import { ServicesBlock } from './components/blocks/ServiceBlock/ui/ServicesBlock'
import { CTABlock } from './components/blocks/CTABlock/CTABlock'
import { CaseStudiesBlock } from './components/blocks/CaseStudiesBlock/ui/CaseStudiesBlock'
import { ProcessBlock } from './components/blocks/ProcessBlock/ui/ProcessBlock'
import { TeamBlock } from './components/blocks/TeamBlock/ui/TeamBlock'
import { ContactBlock } from './components/blocks/ContactBlock/ContactBlock'
import { FooterBlock } from './components/blocks/FooterBlock/ui/FooterBlock'

import './App.scss'

function App() {
  return (
    <section className="hero">
      <div className="container">
        <NavigationBar />

        {/* Landing Page */}
        <LandingPageBlock />

        {/* Services */}
        <HeadingAndSubheading {...HEADINGS_AND_SUBHEADINGS.services} />
        <ServicesBlock cards={SERVICE_CARDS} />

        {/* CTA */}
        <CTABlock />

        {/* Case Studies */}
        <HeadingAndSubheading {...HEADINGS_AND_SUBHEADINGS.caseStudies} />
        <CaseStudiesBlock cards={CASE_STUDY_CARDS} />

        {/* Process */}
        <HeadingAndSubheading {...HEADINGS_AND_SUBHEADINGS.process} />
        <ProcessBlock cards={PROCESS_CARDS} />

        {/* Team */}
        <HeadingAndSubheading {...HEADINGS_AND_SUBHEADINGS.team} />
        <TeamBlock cards={TEAM_CARDS} />

        {/* Contact */}
        <HeadingAndSubheading {...HEADINGS_AND_SUBHEADINGS.contact} />
        <ContactBlock />

        {/* Footer */}
        <FooterBlock />
      </div>
    </section>
  )
}

export default App
