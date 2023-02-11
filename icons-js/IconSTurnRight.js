import Svg, { Path } from 'react-native-svg';
                    
function IconSTurnRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-s-turn-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7h13.5" /><Path d="M18 16l3 3l-3 3" /></Svg>;

}
export default IconSTurnRight;
                    