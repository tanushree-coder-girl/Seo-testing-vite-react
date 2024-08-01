import { Helmet } from "react-helmet-async";

const SharePage = () => {

  const handleShareOnLinkedin = () => {
    const certificateUrl = "https://media.university.builder.ai/wp-content/uploads/2022/11/18165513/Screenshot-2022-11-18-at-16.54.28.png"; // URL to your certificate page

     const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      certificateUrl
    )}&source=LinkedIn&mini=true&text="this is my title"&summary="summmarttty"`;

    window.open(shareUrl, "_blank");
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Shared page!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />

        <meta
          property="og:title"
          content="title shared page.........................."
        />
        <meta
          property="og:description"
          content="shared page descrpition................................"
        />
        <meta
          property="og:image"
          content="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
        ></meta>
      </Helmet>
      <div>
        <button onClick={handleShareOnLinkedin}>
          Share Certificate on LinkedIn
        </button>
  
      </div>
    </>
  );
};

export default SharePage;
