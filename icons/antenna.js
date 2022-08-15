import Svg, { Path } from "react-native-svg";

function IconAntenna({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-antenna" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 4v8" /><Path d="M16 4.5v7" /><Path d="M12 5v16" /><Path d="M8 5.5v5" /><Path d="M4 6v4" /><Path d="M20 8h-16" /></Svg>;
}

export default IconAntenna;