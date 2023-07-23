import Svg, { Path } from 'react-native-svg';
         
function IconTestPipe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-test-pipe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" /><Path d="M7 13h8" /><Path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z" /><Path d="M15 3l6 6" /></Svg>;

}
export default IconTestPipe;
        