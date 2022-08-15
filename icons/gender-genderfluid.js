import Svg, { Path, G, Circle } from "react-native-svg";

function IconGenderGenderfluid({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-genderfluid" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><G transform="rotate(30 -2.778 22.523)"><Circle cx={4.759} cy={6.021} r={4} /><Path d="M8.758 6.02v-6" /><Path d="M.758 12.02v-6" /></G><Path d="M12 12h.01" /><Path d="M9 9l-6 -6" /><Path d="M5.5 8.5l3 -3" /><Path d="M21 21l-6 -6" /><Path d="M17 20l3 -3" /><Path d="M3 7v-4h4" /></Svg>;
}

export default IconGenderGenderfluid;