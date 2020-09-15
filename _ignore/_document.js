import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   console.log("Document Init");
  //   return { ...initialProps, doc:"DocInitProps" }
  // }

  render() {
    // console.log("Document Render", Math.random());
    return (
      <Html lang="en">
      <Head >
        {/*<link rel="manifest" href="/manifest.json"/>*/}
        {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}
        {/*<meta charSet='utf-8'/>*/}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/*<meta name="viewport" content="width=device-width, initial-scale=1.0" />*/}
        <meta charSet="UTF-8" />

        <meta name='desctiption' content='urluckyultravioletstar'/>
        <meta name="keywords" content="urluckyultravioletstar" />

        <meta name='robots' content='urluckyultravioletstar'/>
        <meta name="application-name" content="urluckyultravioletstar"/>

        <meta name="theme-color" content="#162"/>

        {/*возможности отображения сайта в полноэкранном режиме в виде приложений*/}
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="apple-mobile-web-app-title" content="urluckyultravioletstar"/>

        <meta name="msapplication-navbutton-color" content="#162"/>
        <meta name="msapplication-starturl" content="/"/>
        <meta name="msapplication-TileColor" content="#00df94" />


        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.webp"/>
        <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.webp"/>
        <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png"/>
        {/*icon but in svg format*/}
        {/*<link rel="mask-icon"  href="/icons/icon-192x192.svg"  color="#0041df" />*/}

        {/*<meta property="og:locale" content="en_EU"  />*/}


        <meta httpEquiv="content-security-policy"
              content="default-src 'self'; style-src 'self' 'unsafe-inline'  https://fonts.googleapis.com; img-src 'self' https://res.cloudinary.com; font-src https://fonts.gstatic.com https://fonts.googleapis.com 'self' data:;"
        />


        {/*<link rel="stylesheet"*/}
        {/*href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"*/}
        {/*/>*/}
        {/*<link rel="stylesheet"*/}
        {/*href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"*/}
        {/*/>*/}
        {/*<link rel="stylesheet" type="text/css" href="https://unpkg.com/react-custom-scroll@4.1.5/dist/customScroll.css" />*/}
        {/*<link rel="stylesheet" href="https://unpkg.com/react-custom-scroll@4.1.5/dist/reactCustomScroll.js" />*/}

      </Head>

      <body>
      <Main />
      <NextScript />
      </body>
      </Html>
    )
  }
}

export default MyDocument