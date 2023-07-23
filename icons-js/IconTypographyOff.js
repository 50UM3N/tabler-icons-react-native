import Svg, { Path } from 'react-native-svg';
         
function IconTypographyOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-typography-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20h3" /><Path d="M14 20h6" /><Path d="M6.9 15h6.9" /><Path d="M13 13l3 7" /><Path d="M5 20l4.09 -10.906" /><Path d="M10.181 6.183l.819 -2.183h2l3.904 8.924" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconTypographyOff;
        