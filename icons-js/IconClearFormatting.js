import Svg, { Path } from 'react-native-svg';
         
function IconClearFormatting({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clear-formatting" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 15l4 4m0 -4l-4 4" /><Path d="M7 6v-1h11v1" /><Path d="M7 19l4 0" /><Path d="M13 5l-4 14" /></Svg>;

}
export default IconClearFormatting;
        