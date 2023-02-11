import Svg, { Path } from 'react-native-svg';
                    
function IconRoad({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-road" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19l4 -14" /><Path d="M16 5l4 14" /><Path d="M12 8v-2" /><Path d="M12 13v-2" /><Path d="M12 18v-2" /></Svg>;

}
export default IconRoad;
                    