import Svg, { Path, Rect } from "react-native-svg";

function IconSquare1({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-1" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 16v-8l-2 2" /><Rect x={4} y={4} width={16} height={16} rx={2} /></Svg>;
}

export default IconSquare1;