import React, { useState } from 'react';
import axios from 'axios';

const UrlConverter = ({ onConvert }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConvert = async () => {
    setLoading(true);
    setError('');

    try {
      let formattedUrl = url;
      if (!/^https?:\/\//i.test(formattedUrl)) {
        formattedUrl = 'http://' + formattedUrl;
      }

      const response = await axios.get(`http://localhost:3001/fetch-url?url=${encodeURIComponent(formattedUrl)}`);
      console.log('Response data:', response.data); // Debugging: Log the response data

      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, 'text/html');

      const h1 = doc.querySelector('h1')?.textContent || 'Default Header';
      const h2 = doc.querySelector('h2')?.textContent || 'Default Subtitle';
      let img = '/default-image.jpg';

      // First, try to find a valid image within the header tag
      const headerImages = doc.querySelectorAll('header img');
      for (let i = 0; i < headerImages.length; i++) {
        const src = headerImages[i].src;
        if (src.match(/\.(jpeg|jpg|gif|png)$/)) {
          img = src;
          break;
        }
      }

      // If no valid image is found within the header tag, look for images in the entire document excluding nav
      if (img === '/default-image.jpg') {
        const images = doc.querySelectorAll('img');
        for (let i = 0; i < images.length; i++) {
          const src = images[i].src;
          const parentNav = images[i].closest('nav');
          if (!parentNav && src.match(/\.(jpeg|jpg|gif|png)$/)) {
            img = src;
            break;
          }
        }
      }

      console.log('Extracted data:', { h1, h2, img }); // Debugging: Log the extracted data

      onConvert({ h1, h2, img });
    } catch (err) {
      console.error('Error:', err); // Debugging: Log the error
      setError('Failed to fetch the URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="flex flex-col gap-1 items-start justify-start py-2 px-3 bg-gray-950 w-full">
       <h1 className='text-white text-sm font-semibold'>URL to SMM Card Generator</h1>
        <div className="flex gap-2 items-center justify-start bg-gray-950 w-full">

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL"
            className="border border-gray-300 rounded-md py-[1.75px] px-2 w-fit"
          />
          <button
            onClick={handleConvert}
            className="btn-gradient text-white py-[1.75px] px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Converting...' : 'Convert'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
   </div>
  );
};

export default UrlConverter;