import Svg, { Path, Line, Rect } from "react-native-svg";

function IconDeviceLaptop({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-laptop" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={19} x2={21} y2={19} /><Rect x={5} y={6} width={14} height={10} rx={1} /></Svg>;
}

export default IconDeviceLaptop;