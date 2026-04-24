import { Saira } from "next/font/google"

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-saira",
  display: "swap",
})

export default function VertManguinhosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={saira.className} style={{ fontFamily: "'Saira', sans-serif" }}>
      {children}
    </div>
  )
}
