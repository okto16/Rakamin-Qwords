import React from "react";
import { useEffect, useState } from "react";

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return <div>
            {backToTopButton && (
                <button className="btn btn-circle bg-sky-500 border-transparent hover:bg-orange-400 hover:border-transparent transition ease-in-out hover:-translate-y-1 hover:scale-110"
                    style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "30px",
                        height: "50px",
                    }}
                    onClick={scrollUp}
                >
                    <img src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/up-arrow-svgrepo.svg" alt="up-arrow-svgrepo.svg" width="20px" height="20px"/>
                
                </button>
            )}
        </div>

}
export default BackToTopButton