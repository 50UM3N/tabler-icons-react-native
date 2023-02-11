import Svg, { Path } from 'react-native-svg';
                    
function IconBrandGooglePodcasts({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google-podcasts" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3v2" /><Path d="M12 19v2" /><Path d="M12 8v8" /><Path d="M8 17v2" /><Path d="M4 11v2" /><Path d="M20 11v2" /><Path d="M8 5v8" /><Path d="M16 7v-2" /><Path d="M16 19v-8" /></Svg>;

}
export default IconBrandGooglePodcasts;
                    