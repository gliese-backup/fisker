function Layout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default Layout;
