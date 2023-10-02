import Svg, { Path } from 'react-native-svg';
         
function IconAbacusOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-abacus-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5v16" /><Path d="M19 21v-2m0 -4v-12" /><Path d="M5 7h2m4 0h8" /><Path d="M5 15h10" /><Path d="M8 13v4" /><Path d="M11 13v4" /><Path d="M16 16v1" /><Path d="M14 5v4" /><Path d="M11 5v2" /><Path d="M8 8v1" /><Path d="M3 21h18" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconAbacusOff;
        