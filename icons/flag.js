import Svg, { Path, Line } from "react-native-svg";

function IconFlag({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flag" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={5} y1={5} x2={5} y2={21} /><Line x1={19} y1={5} x2={19} y2={14} /><Path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" /><Path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" /></Svg>;
}

export default IconFlag;