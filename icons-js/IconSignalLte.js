import Svg, { Path } from 'react-native-svg';
         
function IconSignalLte({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-signal-lte" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 8h-4v8h4" /><Path d="M17 12h2.5" /><Path d="M4 8v8h4" /><Path d="M10 8h4" /><Path d="M12 8v8" /></Svg>;

}
export default IconSignalLte;
        