import Svg, { Path } from 'react-native-svg';
         
function IconMichelinBibGourmand({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-michelin-bib-gourmand" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.97 20c-2.395 -1.947 -4.763 -5.245 -1.005 -8c-.52 -4 3.442 -7.5 5.524 -7.5c.347 -1 1.499 -1.5 2.54 -1.5c1.04 0 2.135 .5 2.482 1.5c2.082 0 6.044 3.5 5.524 7.5c3.758 2.755 1.39 6.053 -1.005 8" /><Path d="M9 11m-1 0a1 2 0 1 0 2 0a1 2 0 1 0 -2 0" /><Path d="M15 11m-1 0a1 2 0 1 0 2 0a1 2 0 1 0 -2 0" /><Path d="M8 17.085c3.5 2.712 6.5 2.712 9 -1.085" /><Path d="M13 18.5c.815 -2.337 1.881 -1.472 2 -.55" /></Svg>;

}
export default IconMichelinBibGourmand;
        