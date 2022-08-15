import Svg, { Path, Circle } from "react-native-svg";

function IconKeyOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={8} cy={15} r={4} /><Path d="M10.85 12.15l.65 -.65m2 -2l5.5 -5.5" /><Path d="M18 5l2 2" /><Path d="M15 8l2 2" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconKeyOff;