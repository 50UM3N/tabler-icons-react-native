import Svg, { Path, Rect, Line, Circle } from "react-native-svg";

function IconDevices2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" /><Rect x={13} y={4} width={8} height={16} rx={1} /><Line x1={7} y1={19} x2={10} y2={19} /><Line x1={17} y1={8} x2={17} y2={8.01} /><Circle cx={17} cy={16} r={1} /><Line x1={9} y1={15} x2={9} y2={19} /></Svg>;
}

export default IconDevices2;