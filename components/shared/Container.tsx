import { ReactNode } from 'react'
interface ContainerProps{
    children:ReactNode;
    classname?:string

}

const Container = ({children,classname}:ContainerProps) => {
  return (
    <div className={`max-w-[1660px] w-11/12 mx-auto px-3  ${classname}`}>
      {children}
    </div>
  )
}

export default Container
