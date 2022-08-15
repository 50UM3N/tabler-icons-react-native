import Svg, { Path, Rect, Line } from "react-native-svg";

function IconDeviceGamepad({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-gamepad" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={2} y={6} width={20} height={12} rx={2} /><Path d="M6 12h4m-2 -2v4" /><Line x1={15} y1={11} x2={15} y2={11.01} /><Line x1={18} y1={13} x2={18} y2={13.01} /></Svg>;
}

export default IconDeviceGamepad;