import Svg, { Path } from 'react-native-svg';
                    
function IconDownloadOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19" /><Path d="M7 11l5 5l2 -2m2 -2l1 -1" /><Path d="M12 4v4m0 4v4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconDownloadOff;
                    