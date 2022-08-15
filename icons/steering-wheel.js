import Svg, { Path, Circle, Line } from "react-native-svg";

function IconSteeringWheel({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-steering-wheel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Circle cx={12} cy={12} r={2} /><Line x1={12} y1={14} x2={12} y2={21} /><Line x1={10} y1={12} x2={3.25} y2={10} /><Line x1={14} y1={12} x2={20.75} y2={10} /></Svg>;
}

export default IconSteeringWheel;