import Svg, { Path } from 'react-native-svg';
         
function IconBedFlat({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bed-flat" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M10 13h11v-2a3 3 0 0 0 -3 -3h-8v5z" /><Path d="M3 16h18" /></Svg>;

}
export default IconBedFlat;
        