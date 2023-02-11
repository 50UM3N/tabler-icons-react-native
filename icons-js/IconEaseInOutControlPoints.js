import Svg, { Path } from 'react-native-svg';
                    
function IconEaseInOutControlPoints({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ease-in-out-control-points" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" /><Path d="M17 20h-2" /><Path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" /><Path d="M7 4h2" /><Path d="M14 4h-2" /><Path d="M12 20h-2" /><Path d="M3 20c8 0 10 -16 18 -16" /></Svg>;

}
export default IconEaseInOutControlPoints;
                    