import { FloatingWhatsApp } from "react-floating-whatsapp";

const BtnWhatsApp = () => {
    return (
        <div
            className="fixed bottom-[2.5%] right-[2.5%] !z-30">
            <FloatingWhatsApp 
                phoneNumber="+51970838470" 
                accountName="Azpitia Camp Homes" statusMessage=""
                chatMessage="¡Quiero tener un fin de semana en Azpitia! 🌈 ‍‍‍🌝🚙👨‍👩‍👧‍👧️ "
                avatar="fotoWsp.png"
                placeholder="Escribe aquí..." />
        </div>
    )
}

export default BtnWhatsApp