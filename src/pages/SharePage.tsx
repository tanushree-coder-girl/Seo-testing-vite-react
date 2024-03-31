const SharePage = () => {
  const handleShareOnLinkedin = () => {
    const certificateUrl = encodeURIComponent('https://react-vite-seo.netlify.app/sharedPage'); // URL to your certificate page
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${certificateUrl}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <div>
        <button onClick={handleShareOnLinkedin}>Share Certificate on LinkedIn</button>
    </div>
  )
}

export default SharePage