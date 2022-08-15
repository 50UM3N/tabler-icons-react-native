import Svg, { Path, Rect, Circle } from "react-native-svg";

function IconDeviceTablet({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tablet" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={3} width={14} height={18} rx={1} /><Circle cx={12} cy={17} r={1} /></Svg>;
}

export default IconDeviceTablet;