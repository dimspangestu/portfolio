import "./globals.css";

export const metadata = {
  title: "Dimas Pangestu Restu Putra | Software Engineer",
  description:
    "Python backend and full-stack engineer: payment integrations (DANA, Midtrans), financial reconciliation, and production platforms. Open to remote and relocation.",
  openGraph: {
    title: "Dimas Pangestu Restu Putra | Software Engineer",
    description:
      "Python backend, payments, integration and technical support. Open to remote and relocation.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Sets the saved theme before first paint so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..100,500..800&family=Source+Sans+3:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
