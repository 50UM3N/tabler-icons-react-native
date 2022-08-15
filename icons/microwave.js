import Svg, { Path, Rect } from "react-native-svg";

function IconMicrowave({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-microwave" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={6} width={18} height={12} rx={1} /><Path d="M15 6v12" /><Path d="M18 12h.01" /><Path d="M18 15h.01" /><Path d="M18 9h.01" /><Path d="M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" /><Path d="M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" /></Svg>;
}

export default IconMicrowave;