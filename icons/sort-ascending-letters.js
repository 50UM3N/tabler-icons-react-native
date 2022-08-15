import Svg, { Path } from "react-native-svg";

function IconSortAscendingLetters({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-ascending-letters" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" /><Path d="M19 21h-4l4 -7h-4" /><Path d="M4 15l3 3l3 -3" /><Path d="M7 6v12" /></Svg>;
}

export default IconSortAscendingLetters;