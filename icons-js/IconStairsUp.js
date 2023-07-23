import Svg, { Path } from 'react-native-svg';
         
function IconStairsUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stairs-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 6h-5v5h-5v5h-5v5h-5" /><Path d="M6 10v-7" /><Path d="M3 6l3 -3l3 3" /></Svg>;

}
export default IconStairsUp;
        