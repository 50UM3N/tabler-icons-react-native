import Svg, { Path } from 'react-native-svg';
                    
function IconBrandUnsplash({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-unsplash" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" /></Svg>;

}
export default IconBrandUnsplash;
                    