import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <h1>Navbar</h1>
      <hr />
      <Component {...pageProps} />
    </div>
  );
}
