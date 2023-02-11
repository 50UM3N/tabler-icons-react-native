import Svg, { Path } from 'react-native-svg';
                    
function IconCast({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cast" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19l.01 0" /><Path d="M7 19a4 4 0 0 0 -4 -4" /><Path d="M11 19a8 8 0 0 0 -8 -8" /><Path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2" /></Svg>;

}
export default IconCast;
                    