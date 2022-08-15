import Svg, { Path, Rect } from "react-native-svg";

function IconFridge({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fridge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={3} width={14} height={18} rx={2} /><Path d="M5 10h14" /><Path d="M9 13v3" /><Path d="M9 6v1" /></Svg>;
}

export default IconFridge;