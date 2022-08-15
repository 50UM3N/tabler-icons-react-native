import Svg, { Path, Circle } from "react-native-svg";

function IconGenderTransgender({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-transgender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={4} /><Path d="M15 9l6 -6" /><Path d="M21 7v-4h-4" /><Path d="M9 9l-6 -6" /><Path d="M3 7v-4h4" /><Path d="M5.5 8.5l3 -3" /><Path d="M12 16v5" /><Path d="M9.5 19h5" /></Svg>;
}

export default IconGenderTransgender;