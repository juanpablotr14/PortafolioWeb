import React from 'react';
import './footer.css';

const Footer = () => {

    return (

        <footer>

            <a href="#inicio" className="arriba">
                <i class="fa-solid fa-angles-up"></i>
            </a>

            <div className="redes">

                <a href="https://www.instagram.com/juanp51403/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/juanpablotr14"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.facebook.com/juanpablo.tasconroldan.7/"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/juan-pablo-tascon-roldán-7b0698251/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/juanpablotr14"><i class="fa-brands fa-github"></i></a>

            </div>

        </footer>

    );

};

export default Footer;