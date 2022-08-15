import Svg, { Path, Ellipse } from "react-native-svg";

function IconOvalVertical({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-oval-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Ellipse transform="matrix(0 -1 -1 0 24 24)" cx={12} cy={12} rx={6} ry={9} /></Svg>;
}

export default IconOvalVertical;