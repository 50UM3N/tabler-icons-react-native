import Svg, { Path } from 'react-native-svg';
         
function IconBuilding({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21l18 0" /><Path d="M9 8l1 0" /><Path d="M9 12l1 0" /><Path d="M9 16l1 0" /><Path d="M14 8l1 0" /><Path d="M14 12l1 0" /><Path d="M14 16l1 0" /><Path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" /></Svg>;

}
export default IconBuilding;
        