import Svg, { Path } from 'react-native-svg';
                    
function IconBrandPepsi({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-pepsi" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M4 16c5.713 -2.973 11 -3.5 13.449 -11.162" /><Path d="M5 17.5c5.118 -2.859 15 0 14 -11" /></Svg>;

}
export default IconBrandPepsi;
                    