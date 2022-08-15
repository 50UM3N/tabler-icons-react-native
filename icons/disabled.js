import Svg, { Path, Circle, Polyline, Line } from "react-native-svg";

function IconDisabled({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-disabled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={11} cy={5} r={2} /><Polyline points="11 7 11 15 15 15 19 20" /><Line x1={11} y1={11} x2={16} y2={11} /><Path d="M7 11.5a5 5 0 1 0 6 7.5" /></Svg>;
}

export default IconDisabled;