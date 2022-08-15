import Svg, { Path, Circle, Line } from "react-native-svg";

function IconFocus2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-focus-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={0.5} fill="currentColor" /><Circle cx={12} cy={12} r={7} /><Line x1={12} y1={3} x2={12} y2={5} /><Line x1={3} y1={12} x2={5} y2={12} /><Line x1={12} y1={19} x2={12} y2={21} /><Line x1={19} y1={12} x2={21} y2={12} /></Svg>;
}

export default IconFocus2;