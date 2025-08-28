import "./globals.css"

export const metadata = {
  title: "I'm sorry",
  description: "A heartfelt apology",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
