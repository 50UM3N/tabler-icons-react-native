import Svg, { Path } from 'react-native-svg';
                    
function IconUserDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><Path d="M6 21v-2a4 4 0 0 1 4 -4h4c.342 0 .674 .043 .99 .124" /><Path d="M19 16v6" /><Path d="M22 19l-3 3l-3 -3" /></Svg>;

}
export default IconUserDown;
                    