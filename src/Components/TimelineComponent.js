import React from 'react';
import Timeline from 'react-calendar-timeline'

import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
const TimelineComponent = () => {
  const airships = [

    {
  id: 1,
  title: 'AT9',
  rightTitle: 'title in the right sidebar',
  stackItems: true,
  height: 40
},

{
  id: 2,
  title: 'E95',
  rightTitle: 'title in the right sidebar',
  stackItems: true,
  height: 40
}
  ]

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment().add(4, 'hour'),
    end_time: moment().add(5, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]
  return (
  <div>
    Timeline Component
    <Timeline
      groups={airships}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
  </div>
  );
};

export default TimelineComponent;
