import Svg, { Path } from 'react-native-svg';
         
function IconTruckLoading({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-loading" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" /><Path d="M9 6m0 3a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3z" /><Path d="M9 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M18 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></Svg>;

}
export default IconTruckLoading;
        