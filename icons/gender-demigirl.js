import Svg, { Path, Circle } from "react-native-svg";

function IconGenderDemigirl({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-demigirl" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={9} r={5} /><Path d="M12 14v7" /><Path d="M9 18h3" /></Svg>;
}

export default IconGenderDemigirl;