import Svg, { Path } from 'react-native-svg';
         
function IconIdOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455 .279 -.99 .439 -1.563 .439h-12a3 3 0 0 1 -3 -3v-10c0 -1.083 .573 -2.031 1.433 -2.559" /><Path d="M8.175 8.178a2 2 0 1 0 2.646 2.65" /><Path d="M15 8h2" /><Path d="M16 12h1" /><Path d="M7 16h9" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconIdOff;
        