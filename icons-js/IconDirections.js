import Svg, { Path } from 'react-native-svg';
                    
function IconDirections({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-directions" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21v-4" /><Path d="M12 13v-4" /><Path d="M12 5v-2" /><Path d="M10 21h4" /><Path d="M8 5v4h11l2 -2l-2 -2z" /><Path d="M14 13v4h-8l-2 -2l2 -2z" /></Svg>;

}
export default IconDirections;
                    