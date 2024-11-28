import { useState, useEffect } from 'react';
import DeletePostButton from './DeletePostButton'; // Pastikan untuk mengimport komponen ini dengan benar

export default function EditAndDeleteMenu({ user, id }) {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        // Ambil user dari localStorage
        const localUser = localStorage.getItem('user');

        // Cek apakah user dari props sama dengan user di localStorage
        if (user === localUser || localUser === "6745ee7c729d7a09337d6f75" ) {
            setShowMenu(true); // Tampilkan menu jika cocok
        } else {
            setShowMenu(false); // Sembunyikan menu jika tidak cocok
        }
    }, [user]); // Efek ini dijalankan ketika nilai `user` berubah

    if (!showMenu) {
        return null; // Tidak render apa-apa jika menu tidak perlu ditampilkan
    }

    return (
        <div>
            <div id="editDeleteMenu">
                <DeletePostButton id={id} client:only="react"  />     
                <a href={`/edit/${id}`}>
                    <button className='button-edit'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/>
                        </svg>
                    </button>
                </a>
            </div>
            <style jsx>{`
                #editDeleteMenu{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 3px;
                }
                .button-edit {
                    background-color: #333;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 10px 15px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .button-edit:hover {
                    background-color: #f39c12;
                }

                .button-edit svg {
                    fill: white;
                    width: 15px;
                }
                    `}
            </style>
        </div>
    );
}
