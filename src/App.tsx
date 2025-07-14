import './App.css'
import { Sparkles } from 'lucide-react'
import HoverCard from './components/HoverCard/HoverCard'
import ClickFlipCard from './components/ClickFlipCard/ClickFlipCard'
import ScrollRevealCard from './components/ScrollRevealCard/ScrollRevealCard'
import DragCard from './components/DragCard/DragCard'
import TypeEffectCard from './components/TypeEffectCard/TypeEffectCard'
import HoverGlowCard from './components/HoverGlowCard/HoverGlowCard'
import AutoRotateCard from './components/AutoRotateCard/AutoRotateCard'
import AccordionCard from './components/AccordionCard/AccordionCard'
import ProgressRevealCard from './components/ProgressRevealCard/ProgressRevealCard'
import MagneticButton from './components/MagneticButton'

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        padding: '2rem'
      }}
    >
      <section>
        <h2 style={{ marginBottom: '1rem' }}>Typing Effect</h2>
        <TypeEffectCard
          messages={[
            'Hello, welcome to my portfolio!',
            'I build slick UI with React',
            'Let’s work together'
          ]}
          speed={50}
          delay={1000}
          pause={500}
        />
      </section>
      <section>
        <h2 style={{ marginBottom: '1rem' }}>Hover Interection</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'start' }}>
          <HoverCard
            title="Smart AI Tools"
            description="Boost your productivity with intelligent automation."
            icon={<Sparkles />}
          />
          <HoverGlowCard text="Hover over me" icon={<Sparkles />} />
        </div>
      </section>
      <section>
        <h2 style={{ marginBottom: '1rem' }}>Click Interection</h2>
        <ClickFlipCard />
      </section>
      <section>
        <h2 style={{ marginBottom: '1rem' }}>Drag Interaction</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'start' }}>
          <DragCard content="Drag me!" />
          <DragCard content="And me too!" />
        </div>
      </section>
      <section>
        <h2>Scroll Interaction</h2>
        <ScrollRevealCard title="Scroll In #1">
          Ad voluptate est qui labore ad ullamco adipisicing. Duis fugiat irure
          nostrud consectetur laboris quis reprehenderit adipisicing dolore.
          Aliqua esse veniam cupidatat fugiat laborum nostrud adipisicing irure
          excepteur. In occaecat do dolore nulla laboris veniam pariatur dolor
          quis culpa.
        </ScrollRevealCard>
        <div style={{ height: '100px' }} />
        <ScrollRevealCard title="Scroll In #2">
          Sunt enim eu ad commodo duis esse qui pariatur culpa mollit culpa
          pariatur quis ut. Ipsum ex anim aliquip veniam ullamco reprehenderit.
          In culpa quis do eiusmod ea sunt aute reprehenderit voluptate.
        </ScrollRevealCard>
        <div style={{ height: '100px' }} />
        <ProgressRevealCard
          content={`Scroll-triggered reveal effect.\nEach line appears one after another.\nFramer Motion + useInView = magic.`}
        />
      </section>
      <section>
        <h2 style={{ marginBottom: '1rem' }}>Auto Rotate Card</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'start' }}>
          <AutoRotateCard
            messages={[
              '👋 Welcome to my portfolio',
              '💡 I specialize in frontend interactivity',
              '🚀 Let’s build something amazing'
            ]}
            interval={3000}
            autoPlay={true}
          />
        </div>
      </section>
      <section>
        <h2 style={{ marginBottom: '1rem' }}>Accordion Card</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <AccordionCard title="What is React?">
            React is a JavaScript library for building user interfaces.
          </AccordionCard>
          <AccordionCard title="Why use Framer Motion?">
            Framer Motion provides powerful animations and transitions for
            React.
          </AccordionCard>
          <AccordionCard title="How to create interactive UIs?">
            Use state management and event handlers to create dynamic
            interactions.
          </AccordionCard>
        </div>
      </section>
      <section>
        <h2 style={{ marginBottom: '1rem' }}>Magnetic Button</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'start' }}>
          <MagneticButton label="Hover me!" strength={20} />
          <MagneticButton label="I'm magnetic!" strength={30} />
        </div>
      </section>
    </div>
  )
}

export default App
