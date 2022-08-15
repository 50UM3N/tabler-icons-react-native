import Svg, { Path, Circle, Line } from "react-native-svg";

function IconDivide({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-divide" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle fill="currentColor" cx={12} cy={6} r={1} /><Circle fill="currentColor" cx={12} cy={18} r={1} /><Line x1={5} y1={12} x2={19} y2={12} /></Svg>;
}

export default IconDivide;