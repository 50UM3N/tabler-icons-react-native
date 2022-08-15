import Svg, { Path, Circle } from "react-native-svg";

function IconCircuitPushbutton({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-pushbutton" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 17h2" /><Path d="M20 17h2" /><Circle cx={6} cy={17} r={2} /><Circle cx={18} cy={17} r={2} /><Path d="M6 11h12" /><Path d="M12 11v-6" /></Svg>;
}

export default IconCircuitPushbutton;