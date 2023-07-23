import Svg, { Path } from 'react-native-svg';
         
function IconBrandStorj({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-storj" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M4 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M20 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M20 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 3m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 21l-8 -4v-10l8 -4l8 4v10z" /><Path d="M9.1 15a2.1 2.1 0 0 1 -.648 -4.098c.282 -1.648 1.319 -2.902 3.048 -2.902c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19l-.202 .01h-5.8z" /><Path d="M4 7l4.323 2.702" /><Path d="M16.413 14.758l3.587 2.242" /><Path d="M4 17l3.529 -2.206" /><Path d="M14.609 10.37l5.391 -3.37" /><Path d="M12 3v5" /><Path d="M12 15v6" /></Svg>;

}
export default IconBrandStorj;
        