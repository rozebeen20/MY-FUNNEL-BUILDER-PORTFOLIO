import { Link } from 'react-router-dom'
import LeadForm from '../components/LeadForm'
import { ROOM_IMAGES } from '../lib/data'

const BENEFITS = [
  {
    id: '01',
    title: 'Create Atmosphere',
    copy: 'Warmth, depth and shadow — the qualities that make a room feel considered.',
  },
  {
    id: '02',
    title: 'Define Your Space',
    copy: 'A single sculptural piece gives a room a centre and a point of view.',
  },
  {
    id: '03',
    title: 'Elevate Everyday Living',
    copy: 'Evenings, dinners, quiet mornings — light shapes how each one feels.',
  },
]

export default function PreSale() {
  return (
    <>
      <section className="relative">
        <img
          src="/assets/hero-Dt2locjs.jpg"
          alt="Warmly lit luxury living room at night"
          width={1600}
          height={1200}
          className="h-[520px] w-full object-cover lg:h-[640px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 flex items-center px-5 lg:px-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Stage 02 — Pre-Sale</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-ivory lg:text-6xl">
              Transform Your Space.
              <br />
              Change How It <span className="text-gold">Feels.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream">
              The right lighting does more than illuminate a room. It creates
              atmosphere, defines character, and changes the way your home
              feels.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/quiz" className="btn-gold">
                Find My Perfect Light →
              </Link>
              <Link to="/shop" className="btn-outline">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Problem</p>
          <h2 className="mt-6 font-display text-3xl text-ivory lg:text-5xl">
            Your lighting shapes how your home feels.
          </h2>
          <p className="mt-6 text-lg text-cream">
            Most homes are lit by whatever came with the room. The furniture is
            chosen carefully; the light is not. That single gap is why a
            beautiful space can still feel flat.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.id} className="border border-border p-9 transition-colors hover:border-gold">
              <p className="label-xs text-gold">{b.id}</p>
              <h3 className="mt-5 font-display text-2xl text-ivory">{b.title}</h3>
              <p className="mt-3 text-cream">{b.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow">Room Inspiration</p>
          <h2 className="mt-6 font-display text-3xl text-ivory lg:text-4xl">
            Every room asks for a different light.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {ROOM_IMAGES.map((room) => (
              <figure key={room.title} className="group relative overflow-hidden border border-border">
                <img
                  src={room.image}
                  alt={`${room.title} lit with premium fixtures`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5">
                  <span className="label-xs text-ivory">{room.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Lead Capture</p>
            <h2 className="mt-5 font-display text-3xl text-ivory lg:text-4xl">
              Get The Lighting Guide
            </h2>
            <p className="mt-4 text-cream">
              Discover the lighting styles that work best for your space.
            </p>
          </div>
          <LeadForm source="pre-sale" cta="Get The Guide →" idPrefix="pre-sale" />
        </div>
      </section>

      <section className="border-t border-border px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="font-display text-3xl text-ivory lg:text-4xl">
            Ready to find yours?
          </h2>
          <p className="mt-4 text-cream">Four questions. One personalized match.</p>
          <Link to="/quiz" className="btn-gold mt-8">
            Find My Perfect Light →
          </Link>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-8">
            <span className="label-xs text-cream">Traffic</span>
            <span className="text-gold">→</span>
            <span className="label-xs text-gold">Pre-Sale</span>
            <span className="text-gold">→</span>
            <span className="label-xs text-cream">Quiz</span>
          </div>
        </div>
      </section>
    </>
  )
}