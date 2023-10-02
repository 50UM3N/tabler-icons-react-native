import Svg, { Path } from 'react-native-svg';
         
function IconCamper({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M5 18h-1a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2h12a4 4 0 0 1 4 4h-18" /><Path d="M9 18h6" /><Path d="M19 18h1a1 1 0 0 0 1 -1v-4l-3 -5" /><Path d="M21 13h-7" /><Path d="M14 8v10" /></Svg>;

}
export default IconCamper;
        