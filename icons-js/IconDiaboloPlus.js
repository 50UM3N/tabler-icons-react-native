import Svg, { Path } from 'react-native-svg';
         
function IconDiaboloPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-diabolo-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><Path d="M4 6v.143a1 1 0 0 0 .048 .307l1.952 5.55l-1.964 5.67a1 1 0 0 0 -.036 .265v.065c0 1.657 3.582 3 8 3c.17 0 .34 -.002 .508 -.006m5.492 -8.994l1.952 -5.55a1 1 0 0 0 .048 -.307v-.143" /><Path d="M6 12c0 1.105 2.686 2 6 2s6 -.895 6 -2" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconDiaboloPlus;
        