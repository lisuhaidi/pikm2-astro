import React, { useState } from 'react';
import PostPopup from './PostPopup';
import axios from 'axios';

export default function DeletePostButton({ id }) {
  const [isDeleted, setIsDeleted] = useState(false); // State untuk mengontrol popup
  const [isLoading, setIsLoading] = useState(false); // State untuk loading saat menghapus data

  const handleDelete = async () => {
    setIsLoading(true); // Mulai loading

    try {
      const response = await axios.delete(`https://pikm-pj8ksyy1gtrn.deno.dev/messages/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setIsDeleted(true); // Tampilkan popup jika berhasil dihapus
      } else {
        throw new Error('Gagal menghapus data');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setIsLoading(false); // Hentikan loading jika terjadi kesalahan
    }
  };

  return (
    <div>
      <button className="button-delete" onClick={handleDelete} disabled={isLoading}>
        {isLoading 
          ? <div className="loader"></div>
          : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
        }
      </button>

      {/* Popup */}
      {isDeleted && <PostPopup text="Berhasil menghapus postingan." />}

      <style jsx>{`
        .button-delete {
          background-color: #333;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 10px 15px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .button-delete:hover {
          background-color: #f39c12;
        }

        .button-delete svg {
          fill: white;
          width: 15px;
        }

        .loader {
          width: 30px;
          aspect-ratio: 2;
          --_g: no-repeat radial-gradient(circle closest-side, #fff 90%, #0000);
          background: 
            var(--_g) 0% 50%, 
            var(--_g) 50% 50%, 
            var(--_g) 100% 50%;
          background-size: calc(100%/3) 50%;
          animation: l3 1s infinite linear;
        }

        @keyframes l3 {
          20% { background-position: 0% 0%, 50% 50%, 100% 50%; }
          40% { background-position: 0% 100%, 50% 0%, 100% 50%; }
          60% { background-position: 0% 50%, 50% 100%, 100% 0%; }
          80% { background-position: 0% 50%, 50% 50%, 100% 100%; }
        }
      `}</style>
    </div>
  );
}
