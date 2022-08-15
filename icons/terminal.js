import Svg, { Path, Line } from "react-native-svg";

function IconTerminal({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-terminal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 7l5 5l-5 5" /><Line x1={12} y1={19} x2={19} y2={19} /></Svg>;
}

export default IconTerminal;