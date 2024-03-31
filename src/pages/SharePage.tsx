const SharePage = () => {
  const handleShareOnLinkedin = () => {
    const certificateUrl = 'https://react-vite-seo.netlify.app'; // URL to your certificate page
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certificateUrl)}&source=LinkedIn&mini=true`;
    window.open(shareUrl, '_blank');
  };

  return (
    <div>
        <button onClick={handleShareOnLinkedin}>Share Certificate on LinkedIn</button>
    </div>
  );
};

export default SharePage;
