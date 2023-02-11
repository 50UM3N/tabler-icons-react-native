import Svg, { Path } from 'react-native-svg';
                    
function IconCut({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cut" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M9.15 14.85l8.85 -10.85" /><Path d="M6 4l8.85 10.85" /></Svg>;

}
export default IconCut;
                    