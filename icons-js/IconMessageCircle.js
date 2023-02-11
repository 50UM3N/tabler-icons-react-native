import Svg, { Path } from 'react-native-svg';
                    
function IconMessageCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /><Path d="M12 12l0 .01" /><Path d="M8 12l0 .01" /><Path d="M16 12l0 .01" /></Svg>;

}
export default IconMessageCircle;
                    