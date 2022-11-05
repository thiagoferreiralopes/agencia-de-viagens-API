import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-light text-center text-white">
        <div className="container p-4 pb-0">
            <div className="text-center p-3"  style={{background: "rgba(0, 0, 0, 0.2)"}}>
                © 2022 Copyright:
                <Link className="text-white" to="/"> JT Viagens </Link>
            </div>
        </div>
    </footer>
  )
}
