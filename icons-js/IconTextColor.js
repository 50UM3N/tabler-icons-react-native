import Svg, { Path } from 'react-native-svg';
         
function IconTextColor({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-color" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15v-7a3 3 0 0 1 6 0v7" /><Path d="M9 11h6" /><Path d="M5 19h14" /></Svg>;

}
export default IconTextColor;
        