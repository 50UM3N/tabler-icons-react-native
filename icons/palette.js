import Svg, { Path, Circle } from "react-native-svg";

function IconPalette({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><Circle cx={7.5} cy={10.5} r={0.5} fill="currentColor" /><Circle cx={12} cy={7.5} r={0.5} fill="currentColor" /><Circle cx={16.5} cy={10.5} r={0.5} fill="currentColor" /></Svg>;
}

export default IconPalette;