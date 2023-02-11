import Svg, { Path } from 'react-native-svg';
                    
function IconPlugConnectedX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plug-connected-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 16l-4 4" /><Path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" /><Path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" /><Path d="M3 21l2.5 -2.5" /><Path d="M18.5 5.5l2.5 -2.5" /><Path d="M10 11l-2 2" /><Path d="M13 14l-2 2" /><Path d="M16 16l4 4" /></Svg>;

}
export default IconPlugConnectedX;
                    