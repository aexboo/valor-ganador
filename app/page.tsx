import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Pain } from "@/components/sections/pain"
import { Solution } from "@/components/sections/solution"
import { Timeline } from "@/components/sections/timeline"
import { Urgency } from "@/components/sections/urgency"
import { CTAForm } from "@/components/sections/cta-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <Header />
      <Hero />
      <Pain />
      <Solution />
      <Timeline />
      <Urgency />
      <CTAForm />
      <Footer />
    </main>
  )
}
