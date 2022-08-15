import Svg, { Path, Line } from "react-native-svg";

function IconLetterT({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-t" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={6} y1={4} x2={18} y2={4} /><Line x1={12} y1={4} x2={12} y2={20} /></Svg>;
}

export default IconLetterT;