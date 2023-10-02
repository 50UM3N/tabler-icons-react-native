import Svg, { Path } from 'react-native-svg';
         
function IconCylinderPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cylinder-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" /><Path d="M5 6v12c0 1.657 3.134 3 7 3c.173 0 .345 -.003 .515 -.008m6.485 -8.992v-6" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconCylinderPlus;
        