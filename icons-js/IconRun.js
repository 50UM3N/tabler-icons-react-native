import Svg, { Path } from 'react-native-svg';
         
function IconRun({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-run" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M4 17l5 1l.75 -1.5" /><Path d="M15 21l0 -4l-4 -3l1 -6" /><Path d="M7 12l0 -3l5 -1l3 3l3 1" /></Svg>;

}
export default IconRun;
        