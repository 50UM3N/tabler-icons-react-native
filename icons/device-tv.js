import Svg, { Path, Rect, Polyline } from "react-native-svg";

function IconDeviceTv({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tv" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={7} width={18} height={13} rx={2} /><Polyline points="16 3 12 7 8 3" /></Svg>;
}

export default IconDeviceTv;