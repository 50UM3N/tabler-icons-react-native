import Svg, { Path, Circle } from "react-native-svg";

function IconPaletteOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.934 3.97a8.993 8.993 0 0 1 4.066 -.97c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828a4.515 4.515 0 0 1 -1.118 .726m-3.564 .446h-1a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25a9 9 0 0 1 -6.372 -15.356" /><Circle cx={7.5} cy={10.5} r={1} /><Circle cx={12} cy={7.5} r={1} /><Circle cx={16.5} cy={10.5} r={1} /><Path d="M3 3l18 18" /></Svg>;
}

export default IconPaletteOff;