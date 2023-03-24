import Svg, { Path } from 'react-native-svg';
                    
function IconPointerOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pointer-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15.662 11.628l2.229 -1.496a1.2 1.2 0 0 0 -.309 -2.228l-8.013 -2.303m-5.569 -1.601l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l.524 -.524" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconPointerOff;
                    