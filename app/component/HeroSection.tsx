import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/assets/images/minimalist.jpg"
        alt="hero"
        fill
        priority
        className="object-cover"
      />
    </section>
  )
}
