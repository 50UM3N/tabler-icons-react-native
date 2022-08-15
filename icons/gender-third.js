import Svg, { Path, Circle } from "react-native-svg";

function IconGenderThird({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-third" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle transform="rotate(90 16 12)" cx={16} cy={12} r={5} /><Path d="M11 12h-3" /><Path d="M8 12l-5 -4v8z" /></Svg>;
}

export default IconGenderThird;