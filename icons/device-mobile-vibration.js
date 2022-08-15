import Svg, { Path, Rect, Line } from "react-native-svg";

function IconDeviceMobileVibration({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile-vibration" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={12} height={18} rx={2} /><Line x1={8} y1={4} x2={10} y2={4} /><Line x1={9} y1={17} x2={9} y2={17.01} /><Path d="M21 6l-2 3l2 3l-2 3l2 3" /></Svg>;
}

export default IconDeviceMobileVibration;