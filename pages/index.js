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
            src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGRvZ3N8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
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
