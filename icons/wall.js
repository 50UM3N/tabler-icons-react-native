import Svg, { Path, Rect } from "react-native-svg";

function IconWall({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wall" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M4 8h16" /><Path d="M20 12h-16" /><Path d="M4 16h16" /><Path d="M9 4v4" /><Path d="M14 8v4" /><Path d="M8 12v4" /><Path d="M16 12v4" /><Path d="M11 16v4" /></Svg>;
}

export default IconWall;