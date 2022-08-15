import Svg, { Path, Line } from "react-native-svg";

function IconZodiacLibra({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-libra" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={5} y1={20} x2={19} y2={20} /><Path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" /></Svg>;
}

export default IconZodiacLibra;