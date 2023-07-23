import Svg, { Path } from 'react-native-svg';
         
function IconOverline({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-overline" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 9v5a5 5 0 0 0 10 0v-5" /><Path d="M5 5h14" /></Svg>;

}
export default IconOverline;
        