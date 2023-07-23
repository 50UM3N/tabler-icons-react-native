import Svg, { Path } from 'react-native-svg';
         
function IconSolarPanel2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-solar-panel-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 2a4 4 0 1 0 8 0" /><Path d="M4 3h1" /><Path d="M19 3h1" /><Path d="M12 9v1" /><Path d="M17.2 7.2l.707 .707" /><Path d="M6.8 7.2l-.7 .7" /><Path d="M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243z" /><Path d="M4 17h16" /><Path d="M10 13l-1 8" /><Path d="M14 13l1 8" /></Svg>;

}
export default IconSolarPanel2;
        