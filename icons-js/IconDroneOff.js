import Svg, { Path } from 'react-native-svg';
         
function IconDroneOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-drone-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 14h-4v-4" /><Path d="M10 10l-3.5 -3.5" /><Path d="M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936" /><Path d="M14 10l3.5 -3.5" /><Path d="M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965" /><Path d="M14 14l3.5 3.5" /><Path d="M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913" /><Path d="M10 14l-3.5 3.5" /><Path d="M6 14.035a3.5 3.5 0 1 0 3.966 3.965" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconDroneOff;
        