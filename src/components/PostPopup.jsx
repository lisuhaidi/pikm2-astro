export default function PostPopup({text}) {
    return (
      <div className="popup-overlay">
        <div className="popup-box">
          <p className="popup-text">{text}</p>
          <a href="/" className="popup-button">
            Buka beranda
          </a>
        </div>
        <style jsx>{`
            /* Overlay background */
            .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            }

            /* Popup container */
            .popup-box {
            background: #ffffff;
            border: 1px solid #ddd;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 20px;
            margin: 20px;
            text-align: center;
            width: 90%;
            max-width: 400px;
            transition: box-shadow 0.3s, transform 0.3s;
            }

            .popup-box:hover {
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
            }

            /* Popup text */
            .popup-text {
            font-size: 1.2rem;
            color: #333;
            margin-bottom: 20px;
            }

            /* Popup button */
            .popup-button {
            background: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            text-decoration: none;
            font-size: 1rem;
            display: inline-block;
            transition: background-color 0.2s, transform 0.2s;
            }

            .popup-button:hover {
            background: #f39c12;
            transform: translateY(-3px);
            }

            /* Responsive improvements */
            @media (max-width: 768px) {
            .popup-box {
                padding: 15px;
            }

            .popup-text {
                font-size: 1rem;
            }

            .popup-button {
                padding: 8px 12px;
                font-size: 0.85rem;
            }

        `}</style>
      </div>
    );
  }
  