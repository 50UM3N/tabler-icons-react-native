import Svg, { Path } from 'react-native-svg';
         
function IconBrandElectronicArts({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-electronic-arts" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3" /><Path d="M17 14h-2" /><Path d="M6.5 12h3.5" /><Path d="M8 9h3" /></Svg>;

}
export default IconBrandElectronicArts;
        