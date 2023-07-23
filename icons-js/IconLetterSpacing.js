import Svg, { Path } from 'react-native-svg';
         
function IconLetterSpacing({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-spacing" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" /><Path d="M13 4l3 8l3 -8" /><Path d="M5 18h14" /><Path d="M17 20l2 -2l-2 -2" /><Path d="M7 16l-2 2l2 2" /></Svg>;

}
export default IconLetterSpacing;
        