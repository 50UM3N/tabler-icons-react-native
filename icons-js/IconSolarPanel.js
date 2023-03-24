import Svg, { Path } from 'react-native-svg';
                    
function IconSolarPanel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-solar-panel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.28 14h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243z" /><Path d="M4 10h16" /><Path d="M10 6l-1 8" /><Path d="M14 6l1 8" /><Path d="M12 14v4" /><Path d="M7 18h10" /></Svg>;

}
export default IconSolarPanel;
                    