import * as React from "react"
import Svg, { Path } from "react-native-svg"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SvgAllGood = ({ width, height }) => (
  <Svg width={wp(`${width}` + "%")} height={hp(`${height}` + "%")}>
    <Path
      d="M2.047 24a.33.33 0 0 1-.327-.295v-.001L.5 11.336l-.001-.031c0-.182.147-.329.329-.329h8.233v13.025L2.047 24Zm3.36-3.265v.001a1.301 1.301 0 1 0 1.301-1.301h-.002c-.719 0-1.301.582-1.302 1.301l.003-.001Zm.48-8c0 .181.147.328.329.328h.764a.328.328 0 0 0 0-.656h-.77a.33.33 0 0 0-.329.329v.003l.006-.004Zm-3.61 0c0 .181.147.328.328.328H5.11a.328.328 0 0 0 0-.656H2.599a.328.328 0 0 0-.328.328v.003l.006-.003Zm9.8 9.388a1.888 1.888 0 0 1-.494-.253l.006.004-.1-.063a20.915 20.915 0 0 1-.69-.452l-.101-.071c-.132-.095-.194-.137-.262-.133-.24.005-.48.007-.72.01V12.01l-.013-.77c.451-.287.867-.56.992-.664.17-.342.338-.628.524-.902l-.017.027c.085-.133.17-.265.248-.396l1.724-2.894c.08-.136.167-.272.254-.408.145-.216.299-.474.44-.74l.024-.049c.079-.161.107-.343.079-.521l.001.005-.006-3.12c.063-.454.319-.838.68-1.072l.006-.004a1.97 1.97 0 0 1 1.162-.5h.007l.063-.001c.341 0 .663.081.949.224l-.012-.006c.191.092.354.19.507.3l-.01-.007.106.07c.241.127.421.341.501.6l.002.007c.187.696.358 1.329.517 1.964l.066.259c.101.34.188.751.244 1.172l.005.042c-.171 1.574-.5 3.01-.976 4.378l.042-.138 7.693-.011h.028a1.643 1.643 0 0 1 1.63 1.848l.001-.008a1.982 1.982 0 0 1-.894 1.781l-.008.005c.28.41.412.905.372 1.4v-.007a1.848 1.848 0 0 1-1.137 1.873l-.012.004c.224.399.328.854.299 1.31v-.006a1.905 1.905 0 0 1-.886 1.733l-.008.005c.204.457.282.961.224 1.459l.001-.013v.188a1.833 1.833 0 0 1-2.007 1.719l.007.001h-4.429l-.015.001-.016-.001h.001-5.91c-.051 0-.104 0-.16.008-.068.004-.14.01-.214.01h-.015c-.101 0-.202-.013-.299-.04l.008.002-.002-.004Zm-6.015-1.387a.64.64 0 1 1 1.282.001.64.64 0 0 1-1.282-.001Z"
      fill="#117CDF"
    />
  </Svg>
)

export default SvgAllGood;
