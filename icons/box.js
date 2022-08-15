import Svg, { Path, Polyline, Line } from "react-native-svg";

function IconBox({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><Line x1={12} y1={12} x2={20} y2={7.5} /><Line x1={12} y1={12} x2={12} y2={21} /><Line x1={12} y1={12} x2={4} y2={7.5} /></Svg>;
}

export default IconBox;