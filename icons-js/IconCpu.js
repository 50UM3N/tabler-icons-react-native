import Svg, { Path } from 'react-native-svg';
         
function IconCpu({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cpu" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><Path d="M9 9h6v6h-6z" /><Path d="M3 10h2" /><Path d="M3 14h2" /><Path d="M10 3v2" /><Path d="M14 3v2" /><Path d="M21 10h-2" /><Path d="M21 14h-2" /><Path d="M14 21v-2" /><Path d="M10 21v-2" /></Svg>;

}
export default IconCpu;
        