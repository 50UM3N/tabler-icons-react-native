import Svg, { Path, Circle, Line } from "react-native-svg";

function IconAtom2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-atom-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={3} /><Line x1={12} y1={21} x2={12} y2={21.01} /><Line x1={3} y1={9} x2={3} y2={9.01} /><Line x1={21} y1={9} x2={21} y2={9.01} /><Path d="M8 20.1a9 9 0 0 1 -5 -7.1" /><Path d="M16 20.1a9 9 0 0 0 5 -7.1" /><Path d="M6.2 5a9 9 0 0 1 11.4 0" /></Svg>;
}

export default IconAtom2;