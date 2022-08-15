import Svg, { Path, Rect } from "react-native-svg";

function IconHeadset({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-headset" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={13} rx={2} width={4} height={6} /><Rect x={16} y={13} rx={2} width={4} height={6} /><Path d="M4 15v-3a8 8 0 0 1 16 0v3" /><Path d="M18 19a6 3 0 0 1 -6 3" /></Svg>;
}

export default IconHeadset;