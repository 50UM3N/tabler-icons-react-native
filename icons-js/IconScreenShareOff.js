import Svg, { Path } from 'react-native-svg';
         
function IconScreenShareOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-screen-share-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" /><Path d="M7 20l10 0" /><Path d="M9 16l0 4" /><Path d="M15 16l0 4" /><Path d="M17 8l4 -4m-4 0l4 4" /></Svg>;

}
export default IconScreenShareOff;
        