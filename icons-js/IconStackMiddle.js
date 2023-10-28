import Svg, { Path } from 'react-native-svg';
         
function IconStackMiddle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-middle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 10l4 -2l-8 -4l-8 4l4 2" /><Path d="M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill={color} /><Path d="M8 14l-4 2l8 4l8 -4l-4 -2" /></Svg>;

}
export default IconStackMiddle;
        