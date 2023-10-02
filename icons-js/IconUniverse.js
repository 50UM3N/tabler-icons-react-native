import Svg, { Path } from 'react-native-svg';
         
function IconUniverse({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-universe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.027 11.477a5 5 0 1 0 5.496 -4.45a4.951 4.951 0 0 0 -3.088 .681" /><Path d="M5.636 5.636a9 9 0 1 0 3.555 -2.188" /><Path d="M18 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M9 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></Svg>;

}
export default IconUniverse;
        