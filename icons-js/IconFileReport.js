import Svg, { Path } from 'react-native-svg';
                    
function IconFileReport({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-report" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M17 13v4h4" /><Path d="M12 3v4a1 1 0 0 0 1 1h4" /><Path d="M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" /></Svg>;

}
export default IconFileReport;
                    