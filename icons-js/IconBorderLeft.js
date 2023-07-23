import Svg, { Path } from 'react-native-svg';
         
function IconBorderLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20l0 -16" /><Path d="M8 4l0 .01" /><Path d="M12 4l0 .01" /><Path d="M16 4l0 .01" /><Path d="M20 4l0 .01" /><Path d="M12 8l0 .01" /><Path d="M20 8l0 .01" /><Path d="M8 12l0 .01" /><Path d="M12 12l0 .01" /><Path d="M16 12l0 .01" /><Path d="M20 12l0 .01" /><Path d="M12 16l0 .01" /><Path d="M20 16l0 .01" /><Path d="M8 20l0 .01" /><Path d="M12 20l0 .01" /><Path d="M16 20l0 .01" /><Path d="M20 20l0 .01" /></Svg>;

}
export default IconBorderLeft;
        