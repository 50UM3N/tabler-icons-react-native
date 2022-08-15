import Svg, { Path, Circle } from "react-native-svg";

function IconMathAvg({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-avg" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21l18 -18" /><Circle cx={12} cy={12} r={8} /></Svg>;
}

export default IconMathAvg;