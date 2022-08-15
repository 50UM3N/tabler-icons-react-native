import Svg, { Path, Circle } from "react-native-svg";

function IconGenderIntergender({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-intergender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13.5 11.5l6.5 6.5v-4" /><Path d="M11.5 13.5l6.5 6.5" /><Circle transform="matrix(1 0 0 -1 0 18)" cx={9} cy={9} r={5} /><Path d="M14 20l2 -2" /></Svg>;
}

export default IconGenderIntergender;