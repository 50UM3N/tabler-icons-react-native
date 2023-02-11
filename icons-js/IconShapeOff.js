import Svg, { Path } from 'react-native-svg';
                    
function IconShapeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3.575 3.597a2 2 0 0 0 2.849 2.808" /><Path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17.574 17.598a2 2 0 0 0 2.826 2.83" /><Path d="M5 7v10" /><Path d="M9 5h8" /><Path d="M7 19h10" /><Path d="M19 7v8" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconShapeOff;
                    