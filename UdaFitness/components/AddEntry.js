import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import UdaciStepper from './UdaciStepper'
import UdaciSlider from './UdaciSlider'
import DateHeader from './DateHeader'
import { Ionicons } from '@expo/vector-icons'
import TextButton from './TextButton'
import { submitEntry, removeEntry } from '../utils/api'

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }

  decrement = (metric) => {
    const {  step } = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] - step
      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }))
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state
    //update redux
    this.setState({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    })
    //nav to home
    //save to DB
    submitEntry({key, entry})
    //clear loca
  }

  reset = () => {
    const key = timeToString()
    //update redux
    //nav to home
    //save to DB
    removeEntry(key)
    //clear loca
  }

  render() {
    const metaInfo = getMetricMetaInfo()

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons
            name={'ios-happy-outline'}
            size={100}
          />
          <Text>You already logged your information for today.</Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      )
    } else {
      return (
        <View>
          <DateHeader date={(new Date()).toLocaleDateString()}/>
          {Object.keys(metaInfo).map((key) => {
            const { getIcon, type, max, step, unit, ...rest } = metaInfo[key]
            const value = this.state[key]
            return (
              <View key={key}>
                {getIcon()}
                {type == 'slider' ?
                  <UdaciSlider max={max} step={step} unit={unit} value={value}
                    onChange={(value) => this.slide(key, value)}
                  />
                  :
                  <UdaciStepper max={max} unit={unit} value={value}
                    onIncrement={() => this.increment(key)}
                    onDecrement={() => this.decrement(key)}
                  />
                }
              </View>
            )
          })}
          <SubmitBtn onPress={this.submit}/>
        </View>
      )
    }
  }
}
