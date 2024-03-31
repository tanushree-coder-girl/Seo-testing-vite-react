const SharePage = () => {
  const handleShareOnLinkedin = () => {
    const certificateUrl = encodeURIComponent('http://localhost:5173/sharedPage'); // URL to your certificate page
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