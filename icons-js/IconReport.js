import Svg, { Path } from 'react-native-svg';
                    
function IconReport({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" /><Path d="M18 14v4h4" /><Path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" /><Path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><Path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M8 11h4" /><Path d="M8 15h3" /></Svg>;

}
export default IconReport;
                    