import Svg, { Path } from 'react-native-svg';
                    
function IconLoaderQuarter({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-quarter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 6l0 -3" /><Path d="M6 12l-3 0" /><Path d="M7.75 7.75l-2.15 -2.15" /></Svg>;

}
export default IconLoaderQuarter;
                    