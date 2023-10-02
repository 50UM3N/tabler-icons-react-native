import Svg, { Path } from 'react-native-svg';
         
function IconCaravan({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caravan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M11 18h7a2 2 0 0 0 2 -2v-7a2 2 0 0 0 -2 -2h-9.5a5.5 5.5 0 0 0 -5.5 5.5v3.5a2 2 0 0 0 2 2h2" /><Path d="M8 7l7 -3l1 3" /><Path d="M13 11m0 .5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v2a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5z" /><Path d="M20 16h2" /></Svg>;

}
export default IconCaravan;
        