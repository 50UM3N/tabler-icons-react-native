import Svg, { Path } from 'react-native-svg';
                    
function IconClick({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-click" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12l3 0" /><Path d="M12 3l0 3" /><Path d="M7.8 7.8l-2.2 -2.2" /><Path d="M16.2 7.8l2.2 -2.2" /><Path d="M7.8 16.2l-2.2 2.2" /><Path d="M12 12l9 3l-4 2l-2 4l-3 -9" /></Svg>;

}
export default IconClick;
                    