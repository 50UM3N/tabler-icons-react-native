import Svg, { Path } from 'react-native-svg';
                    
function IconDropletFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-droplet-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.801 11.003a6 6 0 1 0 10.396 -.003l-5.197 -8l-5.199 8.003z" stroke="#010202" stroke-width="0" fill={color} /><Path d="M12 3v17" stroke-width="0" fill={color} /><Path d="M12 12l3.544 -3.544" stroke-width="0" fill={color} /><Path d="M12 17.3l5.558 -5.558" stroke-width="0" fill={color} /></Svg>;

}
export default IconDropletFilled;
                    