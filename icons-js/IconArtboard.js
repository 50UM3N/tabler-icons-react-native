import Svg, { Path } from 'react-native-svg';
                    
function IconArtboard({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-artboard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><Path d="M3 8l1 0" /><Path d="M3 16l1 0" /><Path d="M8 3l0 1" /><Path d="M16 3l0 1" /><Path d="M20 8l1 0" /><Path d="M20 16l1 0" /><Path d="M8 20l0 1" /><Path d="M16 20l0 1" /></Svg>;

}
export default IconArtboard;
                    