import Svg, { Path } from 'react-native-svg';
                    
function IconTextSize({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-size" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7v-2h13v2" /><Path d="M10 5v14" /><Path d="M12 19h-4" /><Path d="M15 13v-1h6v1" /><Path d="M18 12v7" /><Path d="M17 19h2" /></Svg>;

}
export default IconTextSize;
                    