import Svg, { Path, Circle } from "react-native-svg";

function IconGenderHermaphrodite({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-hermaphrodite" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 14v7" /><Path d="M9 18h6" /><Circle transform="matrix(1 0 0 -1 0 20)" cx={12} cy={10} r={4} /><Path d="M15 3a3 3 0 0 1 -6 0" /></Svg>;
}

export default IconGenderHermaphrodite;