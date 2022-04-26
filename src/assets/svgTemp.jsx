import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Svgtemp = ({width,height}) => (
  <Svg width={width} height={height} fill="none" strokeLinecap='round' strokeLinejoin='round'>
    <Path
      d="M11.034 25c0 .55-.167 1.09-.483 1.559-.315.47-.767.852-1.306 1.104a3.6 3.6 0 0 1-3.433-.215 3.08 3.08 0 0 1-1.126-1.258 2.745 2.745 0 0 1-.24-1.604c.083-.545.33-1.058.713-1.484.384-.426.89-.749 1.462-.932V5c0-.265.116-.52.323-.707.207-.188.487-.293.78-.293.293 0 .573.105.78.293A.955.955 0 0 1 8.828 5v17.17c.645.207 1.204.59 1.6 1.097.395.507.607 1.112.606 1.733Z"
      fill="url(#a)"
    />
    <Path
      d="M2.207 5c0-1.326.581-2.598 1.616-3.536C4.858.527 6.26 0 7.724 0c1.463 0 2.867.527 3.901 1.464 1.035.938 1.616 2.21 1.616 3.536v15.1c1.065.985 1.785 2.232 2.07 3.586a6.394 6.394 0 0 1-.466 4.025c-.59 1.27-1.58 2.355-2.846 3.118A8.306 8.306 0 0 1 7.724 32a8.306 8.306 0 0 1-4.275-1.17c-1.267-.763-2.257-1.848-2.846-3.118a6.395 6.395 0 0 1-.466-4.025c.285-1.354 1.005-2.601 2.07-3.586V5Zm5.517-3c-.878 0-1.72.316-2.34.879-.621.562-.97 1.325-.97 2.121v15.974l-.369.3c-.833.675-1.42 1.563-1.683 2.547a4.56 4.56 0 0 0 .207 2.964c.399.946 1.105 1.76 2.025 2.334.92.575 2.012.882 3.129.882a5.924 5.924 0 0 0 3.129-.882c.92-.574 1.627-1.388 2.025-2.334.399-.946.471-1.98.207-2.963-.263-.985-.85-1.873-1.683-2.548l-.367-.302V5c0-.796-.348-1.559-.97-2.121A3.492 3.492 0 0 0 7.725 2ZM18.76 4c.292 0 .573.105.78.293a.955.955 0 0 1 .323.707v2c0 .265-.116.52-.323.707a1.164 1.164 0 0 1-.78.293c-.293 0-.574-.105-.78-.293A.955.955 0 0 1 17.654 7V5c0-.265.116-.52.323-.707.207-.188.488-.293.78-.293Zm9.363 3.514a.955.955 0 0 1 .324.707c0 .265-.117.52-.324.707l-1.56 1.416a1.165 1.165 0 0 1-.781.293c-.293 0-.574-.105-.781-.293a.956.956 0 0 1-.324-.708c0-.266.117-.52.324-.708l1.562-1.414c.207-.187.488-.293.78-.293.293 0 .574.106.78.293ZM17.655 11c0-.265.116-.52.323-.707.207-.188.488-.293.78-.293 1.757 0 3.44.632 4.682 1.757 1.242 1.126 1.94 2.652 1.94 4.243 0 1.591-.698 3.117-1.94 4.243C22.198 21.368 20.515 22 18.76 22c-.293 0-.574-.105-.78-.293a.955.955 0 0 1-.324-.707c0-.265.116-.52.323-.707.207-.188.488-.293.78-.293 1.171 0 2.294-.421 3.122-1.172.827-.75 1.292-1.767 1.292-2.828 0-1.06-.465-2.078-1.292-2.828-.828-.75-1.95-1.172-3.121-1.172-.293 0-.574-.105-.78-.293a.955.955 0 0 1-.324-.707Zm9.931 5c0-.265.117-.52.323-.707.207-.188.488-.293.78-.293h2.208c.292 0 .573.105.78.293A.955.955 0 0 1 32 16c0 .265-.116.52-.323.707a1.164 1.164 0 0 1-.78.293H28.69c-.293 0-.574-.105-.78-.293a.955.955 0 0 1-.324-.707ZM25 21.656c.102-.093.224-.167.358-.217a1.203 1.203 0 0 1 .846 0c.134.05.256.124.358.217l1.56 1.416a.952.952 0 0 1 .31.703.956.956 0 0 1-.323.699c-.205.185-.481.29-.77.293a1.167 1.167 0 0 1-.777-.281L25 23.072a1 1 0 0 1-.24-.325.92.92 0 0 1 0-.766 1 1 0 0 1 .24-.325ZM18.759 24c.292 0 .573.105.78.293a.955.955 0 0 1 .323.707v2c0 .265-.116.52-.323.707a1.164 1.164 0 0 1-.78.293c-.293 0-.574-.105-.78-.293a.955.955 0 0 1-.324-.707v-2c0-.265.116-.52.323-.707.207-.188.488-.293.78-.293Z"
      fill="url(#b)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={7.724}
        y1={4}
        x2={7.724}
        y2={27.998}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0558A5" />
        <Stop offset={1} stopColor="#117CDF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={16}
        y1={0}
        x2={16}
        y2={31.999}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0558A5" />
        <Stop offset={1} stopColor="#117CDF" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default Svgtemp;
