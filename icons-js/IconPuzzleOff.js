import Svg, { Path } from 'react-native-svg';
                    
function IconPuzzleOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8.18 4.171a2 2 0 0 1 3.82 .829v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 .819 3.825m-2.819 1.175v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 1 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 1 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconPuzzleOff;
                    