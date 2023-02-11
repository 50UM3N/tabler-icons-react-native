import Svg, { Path } from 'react-native-svg';
                    
function IconCubeSend({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cube-send" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" /><Path d="M11 9.5v5.5l5 3" /><Path d="M16 12.545l5 -3.03" /><Path d="M7 9h-5" /><Path d="M7 12h-3" /><Path d="M7 15h-1" /></Svg>;

}
export default IconCubeSend;
                    