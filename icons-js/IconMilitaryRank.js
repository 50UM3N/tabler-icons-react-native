import Svg, { Path } from 'react-native-svg';
                    
function IconMilitaryRank({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-military-rank" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 7v13h-10v-13l5 -3z" /><Path d="M10 13l2 -1l2 1" /><Path d="M10 17l2 -1l2 1" /><Path d="M10 9l2 -1l2 1" /></Svg>;

}
export default IconMilitaryRank;
                    