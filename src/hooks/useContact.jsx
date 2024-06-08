import { Navigate } from "react-router-dom"

export const useContact = () => {
    
    const handleContactWhatsApp = () => {
        console.log('Contacto');
        <Navigate
          to="https://wa.link/chigtk"
          replace={true}
        />;
    }
  
    return {
        handleContactWhatsApp,
  }
}
