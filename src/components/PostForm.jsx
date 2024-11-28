// src/components/PostForm.jsx
import { useState } from 'react';
import ReactQuill from 'react-quill'; // Impor ReactQuill
import 'react-quill/dist/quill.snow.css'; // Impor style untuk tema snow
import PostPopup from './PostPopup';
import axios from 'axios'; // Impor Axios

export default function PostForm() {
  const [messageText, setMessageText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isPosted, setIsPosted] = useState(false); // State untuk mengontrol popup

  // ambil user dari localstorage
  const localUser = localStorage.getItem('user');
  

  // Menentukan toolbar kustom
  const modules = {
    toolbar: [
      [{ header: '1' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ align: [] }],
      ['link', 'image'],
    ],
  };

  const handleMessageChange = (value) => {
    setMessageText(value); // Update state dengan nilai editor
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      text: messageText,
      likes: 0,
      createdAt: new Date().toISOString(),
      user: localUser,
    };

    try {
      const res = await axios.post('http://localhost:3000/messages', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 200 || res.status === 201) {
        setResponseMessage('Post created successfully!');
        setMessageText(''); // Clear the editor
        setIsPosted(true);
      } else {
        setResponseMessage('Failed to create post.');
      }
    } catch (error) {      
      setResponseMessage('An error occurred: ' + error.message);
    }
  };

  // mulai return component
  return (
    <div className="formbox">
      <div className="form-container">
        <h2>Buat Postingan</h2>
        <form id="postForm" onSubmit={handleSubmit}>
          <ReactQuill
            value={messageText}
            onChange={handleMessageChange} // Tangani perubahan dalam editor
            theme="snow" // Gunakan tema snow
            modules={modules} // Menerapkan toolbar kustom
            placeholder="What's on your mind?"
            required
          />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>

      {/* pesan popup */}
      {isPosted && <PostPopup text={'Berhasil membuat postingan.'} />}

      <style jsx>{`
        .formbox {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .form-container {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin: 20px 0 0 0;
          padding: 20px;
          width: 100%;
          max-width: 800px;
        }

        .form-container h2 {
          font-size: 1.5em;
          margin-bottom: 20px;
          color: #333;
        }

        .form-container .ql-container {
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .form-container button {
          background-color: #333;
          color: #fff;
          margin: 5px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1em;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .form-container button:hover {
          background-color: #f39c12;
        }

        svg {
          transition: transform 0.3s ease;
          fill: white;
        }

        svg:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}
