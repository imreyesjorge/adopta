import Head from "next/head";
import Image from "next/image";

const home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Adopta, un clic y cambia dos vidas</title>
      </Head>
      <main>
        {/* Background */}
        <div className="background">
          {/* Banner Blob */}
          <img src="/Vector1.svg" alt="Blob" className="bannerBlob" />

          {/* Photos */}
          <img
            src="/dogs/guero.png"
            alt="A cute dog"
            className="photosBlob"
            id="blob"
          />

          {/* Logo */}
          <img
            src="/adoptame-logo.png"
            alt="logo"
            className="logo"
          />
        </div>

        {/* Header Section */}
        <header>
          <h1>¡Un clic y cambia dos vidas!</h1>
          <p>
            ¡Pronto regresaremos más fuertes! <br /> Seguimos activos en
            nuestras redes sociales  <span>@somosadopta</span>.
          </p>
        </header>
      </main>
    </>
  );
};

export default home;
