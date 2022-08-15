import Svg, { Path, Circle } from "react-native-svg";

function IconGenderEpicene({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-epicene" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle transform="rotate(-45 12 12)" cx={12} cy={12} r={5} /><Path d="M15.536 15.535l5.464 -5.535" /><Path d="M3 14l5.464 -5.535" /><Path d="M12 12h.01" /></Svg>;
}

export default IconGenderEpicene;