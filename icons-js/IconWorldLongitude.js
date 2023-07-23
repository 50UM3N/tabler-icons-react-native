import Svg, { Path } from 'react-native-svg';
         
function IconWorldLongitude({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-longitude" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M11.5 3a11.2 11.2 0 0 0 0 18" /><Path d="M12.5 3a11.2 11.2 0 0 1 0 18" /><Path d="M12 3l0 18" /></Svg>;

}
export default IconWorldLongitude;
        