import Svg, { Path } from 'react-native-svg';
         
function Icon3dRotate({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-3d-rotate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" /><Path d="M22 11l-3 3" /><Path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z" /><Path d="M3 12.5v5.5l5 3" /><Path d="M8 15.545l5 -3.03" /></Svg>;

}
export default Icon3dRotate;
        