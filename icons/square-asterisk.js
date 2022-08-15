import Svg, { Path, Rect } from "react-native-svg";

function IconSquareAsterisk({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-asterisk" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M12 8.5v7" /><Path d="M9 10l6 4" /><Path d="M9 14l6 -4" /></Svg>;
}

export default IconSquareAsterisk;