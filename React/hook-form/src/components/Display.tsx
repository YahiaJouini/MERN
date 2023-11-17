type DisplayType = {
  children: JSX.Element;
}
export default function Display({ children }: DisplayType) {
  return (
    <div>
      {children}
    </div>
  )
}
