import { useState } from "react"

interface CardArticleProps {
  titulo: string;
  subtitulo: string;
  descripcion: string;
}

function CardArticle({titulo, subtitulo, descripcion}: CardArticleProps) {
  const [expandida, setExpandida] = useState(false);
  
  const esLarga = descripcion.length > 120;
  const textoVisible = expandida ? descripcion : esLarga ? descripcion.substring(0, 120) + "..." : descripcion ;

  return (
    <>
      <article className="bg-neutral-800 shadow- min-h-[200px] rounded-lg p-4 hover:shadow-lg ease-in duration-300">
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">{ titulo }</h3>
            <h4 className= "text-gray-200 font-semibold">{ subtitulo }</h4>
              
                <p className="text-gray-300 mb-4">{ textoVisible }</p>
          </div>
          {esLarga && (
            <button  
              onClick={() => setExpandida(!expandida)}
              aria-expanded={ expandida }
              className="text-cyan-600 font-medium hover:underline self-start block"
              >
              {expandida ? "Leer menos -" : "Leer más +"}
            </button>
          )}
          
        </article>
    </>
  )
}

export default CardArticle