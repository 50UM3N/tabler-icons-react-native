import Svg, { Path } from 'react-native-svg';
                    
function IconCaravan({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caravan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M21 17l-8 0" /><Path d="M9 17h-5a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2h10l4 4v8" /><Path d="M6 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></Svg>;

}
export default IconCaravan;
                    