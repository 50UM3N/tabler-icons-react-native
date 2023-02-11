import Svg, { Path } from 'react-native-svg';
                    
function IconStack({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 6l-8 4l8 4l8 -4l-8 -4" /><Path d="M4 14l8 4l8 -4" /></Svg>;

}
export default IconStack;
                    