import Svg, { Path, Circle, Line } from "react-native-svg";

function IconForklift({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-forklift" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={17} r={2} /><Circle cx={14} cy={17} r={2} /><Line x1={7} y1={17} x2={12} y2={17} /><Path d="M3 17v-6h13v6" /><Path d="M5 11v-4h4" /><Path d="M9 11v-6h4l3 6" /><Path d="M22 15h-3v-10" /><Line x1={16} y1={13} x2={19} y2={13} /></Svg>;
}

export default IconForklift;