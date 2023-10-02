import Svg, { Path } from 'react-native-svg';
         
function IconMapSouth({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-south" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M10 14.25c0 .414 .336 .75 .75 .75h2.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h2.25a.75 .75 0 0 1 .75 .75" /></Svg>;

}
export default IconMapSouth;
        