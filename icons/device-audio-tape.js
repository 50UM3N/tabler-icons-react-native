import Svg, { Path, Rect, Circle } from "react-native-svg";

function IconDeviceAudioTape({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-audio-tape" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Path d="M3 17l4 -3h10l4 3" /><Circle cx={7.5} cy={9.5} r={0.5} fill="currentColor" /><Circle cx={16.5} cy={9.5} r={0.5} fill="currentColor" /></Svg>;
}

export default IconDeviceAudioTape;