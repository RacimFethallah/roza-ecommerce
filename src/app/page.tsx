import About from '@/components/about'
import Hero from '@/components/hero'
import SectionBathBombs from '@/components/sectionBathBombs'
import SectionPerfume from '@/components/sectionPerfume'
import SectionDivider from '@/components/section_divider'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex flex-col items-center h-full w-full">
      <Hero />
      <About />
      <SectionBathBombs />
      <SectionPerfume />
      {/* <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider />
      <SectionDivider /> */}
    </main>
  )
}
