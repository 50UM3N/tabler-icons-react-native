import Svg, { Path } from "react-native-svg";

function IconPoo({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-poo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 12h.01" /><Path d="M14 12h.01" /><Path d="M10 16a3.5 3.5 0 0 0 4 0" /><Path d="M11 4c2 0 3.5 1.5 3.5 4l.164 .005a2.5 2.5 0 0 1 2.196 3.32a3 3 0 0 1 1.615 3.063a3 3 0 0 1 -1.299 5.607l-.176 .005h-10a3 3 0 0 1 -1.474 -5.613a3 3 0 0 1 1.615 -3.062a2.5 2.5 0 0 1 2.195 -3.32l.164 -.005c1.5 0 2.5 -2 1.5 -4z" /></Svg>;
}

export default IconPoo;