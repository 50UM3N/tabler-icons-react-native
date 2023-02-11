import Svg, { Path } from 'react-native-svg';
                    
function IconEaseInControlPoint({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ease-in-control-point" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19c8 0 18 -16 18 -16" /><Path d="M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" /><Path d="M17 19h-2" /><Path d="M12 19h-2" /></Svg>;

}
export default IconEaseInControlPoint;
                    