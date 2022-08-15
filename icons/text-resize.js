import Svg, { Path, Circle } from "react-native-svg";

function IconTextResize({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-text-resize" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={5} r={2} /><Circle cx={19} cy={5} r={2} /><Circle cx={5} cy={19} r={2} /><Circle cx={19} cy={19} r={2} /><Path d="M5 7v10" /><Path d="M7 5h10" /><Path d="M7 19h10" /><Path d="M19 7v10" /><Path d="M10 10h4" /><Path d="M12 14v-4" /></Svg>;
}

export default IconTextResize;