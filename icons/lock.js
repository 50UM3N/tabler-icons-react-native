import Svg, { Path, Rect, Circle } from "react-native-svg";

function IconLock({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={11} width={14} height={10} rx={2} /><Circle cx={12} cy={16} r={1} /><Path d="M8 11v-4a4 4 0 0 1 8 0v4" /></Svg>;
}

export default IconLock;