import CardGeneral from "./components/card/CardGeneral";

export default function App() {
   return (
      <div className="">
         <CardGeneral
            imageUrl="/hero/img1.png"
            title="CELEBRANDO EL DÍA DE LA MADRE"
            description="Porque no hay mejor momento para reunir a la familia"
            buttonText="QUIERO IR"
         />
      </div>
   )
}