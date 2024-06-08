export const useContact = () => {
    
    const handleContactWhatsApp = () => {
        window.open('https://wa.link/chigtk', '_blank')
    }
  
    return {
        handleContactWhatsApp,
  }
}
