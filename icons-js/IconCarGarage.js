import Svg, { Path } from 'react-native-svg';
         
function IconCarGarage({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-car-garage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /><Path d="M3 6l9 -4l9 4" /></Svg>;

}
export default IconCarGarage;
        