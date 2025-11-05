
/*Componente Padre: Card */
interface CardProps {
  children: React.ReactNode;
  className?: string
}

const Card = ({children}: CardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden w-80 flex flex-col">
      {children}
    </div>
  )
}

/* Componente Hijo: CardHeader*/
interface CardHeaderProps {
  children: React.ReactNode
}

const CardHeader = ({children}: CardHeaderProps) => {
  return (
    <div className="bg-gray-300 px-4 py-3 font-semibold text-gray-800">
      {children}
    </div>
  )
}

/* Componente Hijo: CardBody */
interface CardBodyProps {
  children: React.ReactNode
}

const CardBody = ({children}: CardBodyProps) => {
  return (
    <div className="text-gray-700">
      {children}

    </div>
  )
}

/* Componente Hijo: CardFooter */
interface CardFooterProps {
  children: React.ReactNode
}

const CardFooter = ({children}: CardFooterProps) => {
  return (
    <div>
      {children}
    </div>
  )
}
/* Asignar los componentes*/
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;


export default Card;