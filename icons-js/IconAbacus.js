import Svg, { Path } from 'react-native-svg';
                    
function IconAbacus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-abacus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 3v18" /><Path d="M19 21v-18" /><Path d="M5 7h14" /><Path d="M5 15h14" /><Path d="M8 13v4" /><Path d="M11 13v4" /><Path d="M16 13v4" /><Path d="M14 5v4" /><Path d="M11 5v4" /><Path d="M8 5v4" /><Path d="M3 21h18" /></Svg>;

}
export default IconAbacus;
                    