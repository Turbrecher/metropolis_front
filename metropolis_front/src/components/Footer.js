import React from 'react'

export function Footer() {
    return (
        //FOOTER
        <footer>

            <div className="logotipo">
                <img src="{% static 'images/logotipo.png' %}" alt="" />
            </div>

            <div className="enlaces_interes">

                <div className="columna">
                    <a href="/privacidad">Politica de Privacidad</a>
                </div>

                <div className="columna">
                    <a href="/cookies">Politica de Cookies</a>
                </div>

            </div>

            <div className="redes_sociales">

                <div className="img">
                    <img src="/images/redes_sociales/tiktok_logo.png" alt="" />
                </div>

                <div className="img">
                    <img src="/images/redes_sociales/facebook_logo.svg" alt="" />
                </div>



                <div className="img">
                    <img src="/images/redes_sociales/x_logo.svg" alt="" />
                </div>

                <div className="img">
                    <img src="/images/redes_sociales/Youtube_logo.png" alt="" />
                </div>

                <div className="img">
                    <img src="/images/redes_sociales/instagram_logo.png" alt="" />
                </div>

                <div className="img">
                    <img src="/images/redes_sociales/linkedin_logo.png" alt="" />
                </div>
            </div>



            <div className="datos">
                <h2>© 2024 Metropolis. All rights reserved.</h2>
            </div>
        </footer>
    )
}