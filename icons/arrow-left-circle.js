import Svg, { Path, Circle } from "react-native-svg";

function IconArrowLeftCircle({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 12h-14" /><Path d="M6 9l-3 3l3 3" /><Circle cx={19} cy={12} r={2} /></Svg>;
}

export default IconArrowLeftCircle;