import Svg, { Path } from 'react-native-svg';
         
function IconConfucius({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-confucius" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 19l3 2v-18" /><Path d="M4 10l8 -2" /><Path d="M4 18l8 -10" /><Path d="M20 18l-8 -8l8 -4" /></Svg>;

}
export default IconConfucius;
        