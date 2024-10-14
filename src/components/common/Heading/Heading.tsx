import { ReactNode } from "react"

const Heading = ({children}:{children:ReactNode}) => {
  return (
    <h2 className="font-bold mb-4 text-2xl capitalize">{children} Products</h2>
  )
}

export default Heading