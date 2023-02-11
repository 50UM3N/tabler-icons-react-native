import Svg, { Path } from 'react-native-svg';
                    
function IconAmbulance({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ambulance" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /><Path d="M6 10h4m-2 -2v4" /></Svg>;

}
export default IconAmbulance;
                    