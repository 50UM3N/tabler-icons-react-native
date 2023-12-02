import Svg, { Path } from 'react-native-svg';
         
function IconGymnastics({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gymnastics" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M13 21l1 -9l7 -6" /><Path d="M3 11h6l5 1" /><Path d="M11.5 8.5l4.5 -3.5" /></Svg>;

}
export default IconGymnastics;
        