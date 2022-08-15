import Svg, { Path } from "react-native-svg";

function IconCircuitCapacitor({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-capacitor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-8" /><Path d="M2 12h8" /><Path d="M10 7v10" /><Path d="M14 7v10" /></Svg>;
}

export default IconCircuitCapacitor;