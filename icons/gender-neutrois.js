import Svg, { Path, Circle } from "react-native-svg";

function IconGenderNeutrois({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-neutrois" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle transform="matrix(1 0 0 -1 0 30)" cx={12} cy={15} r={5} /><Path d="M12 10v-7" /></Svg>;
}

export default IconGenderNeutrois;