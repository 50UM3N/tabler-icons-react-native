import Svg, { Path } from 'react-native-svg';
         
function IconStretching2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stretching-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M6.5 21l3.5 -5" /><Path d="M5 11l7 -2" /><Path d="M16 21l-4 -7v-5l7 -4" /></Svg>;

}
export default IconStretching2;
        