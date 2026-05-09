import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vishal Singh — React Native Developer Portfolio",
  description:
    "Interactive mobile portfolio of Vishal Singh, a React Native Developer specializing in cross-platform mobile apps. Explore projects, skills, and contact info through a native-feeling phone experience.",
  keywords: ["React Native", "Mobile Developer", "Portfolio", "Expo", "TypeScript", "iOS", "Android"],
  authors: [{ name: "Vishal Singh" }],
  openGraph: {
    title: "Vishal Singh — React Native Developer",
    description: "An immersive mobile portfolio experience built with Portfolio OS",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
