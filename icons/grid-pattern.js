import Svg, { Path, Rect } from "react-native-svg";

function IconGridPattern({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-pattern" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M10 8v8" /><Path d="M14 8v8" /><Path d="M8 10h8" /><Path d="M8 14h8" /></Svg>;
}

export default IconGridPattern;