import './globals.css';

export const metadata = {
  title: 'Chatbot Code Generator',
  description: 'AI chatbot that generates live HTML/CSS/JS code',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
