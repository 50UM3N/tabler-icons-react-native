import Svg, { Path } from 'react-native-svg';
                    
function IconFloatCenter({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-float-center" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 5m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><Path d="M4 7l1 0" /><Path d="M4 11l1 0" /><Path d="M19 7l1 0" /><Path d="M19 11l1 0" /><Path d="M4 15l16 0" /><Path d="M4 19l16 0" /></Svg>;

}
export default IconFloatCenter;
                    