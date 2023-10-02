import Svg, { Path } from 'react-native-svg';
         
function IconTestPipeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-test-pipe-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 8.04a803.533 803.533 0 0 0 -4 3.96m-2 2c-1.085 1.085 -3.125 3.14 -6.122 6.164a2.857 2.857 0 0 1 -4.041 -4.04c3.018 -3 5.073 -5.037 6.163 -6.124m2 -2c.872 -.872 2.191 -2.205 3.959 -4" /><Path d="M7 13h6" /><Path d="M19 15l1.5 1.6m-.74 3.173a2 2 0 0 1 -2.612 -2.608" /><Path d="M15 3l6 6" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconTestPipeOff;
        