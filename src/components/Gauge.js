import React from 'react'

import {RadialGauge} from 'canvas-gauges'

class ReactRadialGauge extends React.Component {
  componentDidMount () {
    const options = Object.assign({}, this.props, {
      renderTo: this.el,
      width: 270,
      title: "Volt",
      height: 270,
      units:"V",
      minValue: 0,
      maxValue: 10,
      majorTicks: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights:[
          {
              "from": 0,
              "to": 2,
              "color": "rgba(10, 10, 10, .25)"
          },
          {
              "from": 2,
              "to": 3,
              "color": "rgba(0, 255, 10, .50)"
          },
          {
              "from": 3,
              "to": 6,
              "color": "rgba(255, 255, 10, .50)"
          },
          {
              "from": 6,
              "to": 10,
              "color": "rgba(255, 50, 50, .50)"
          }
      ],
      colorPlate:"#fff",
      borderShadowWidth: 0,
      valueBox: true,
      valueInt: 2,
      needleType: "arrow",
      needleWidth: 2,
      needleCircleSize: 7,
      colorValueBoxRect: "#fff",
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1500,
      animationRule:"linear"
    })
    this.gauge = new RadialGauge(options).draw()
  }

  componentWillReceiveProps (nextProps) {
    this.gauge.value = nextProps.value
    this.gauge.update(nextProps)
  }

  render () {
    return (
      <canvas ref={(canvas) => {
        this.el = canvas
      }} />
    )
  }
}

export default ReactRadialGauge
