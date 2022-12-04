import * as React from 'react';
import { SpiderChartView } from './SpiderChartView';
import { Swipe } from './Swipe';

export default class Test extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    id: 'id',
                    avatar: 'https://horoskop-tarot.sk/images/astro_stars/ariana_grande_zivotopis-znamenie_zverokruhu-laska-zivot-fakty.jpg',
                    username: 'Ariana Grande',
                    location: 'USA?',
                    skills: {
                        'JavaScript': [1, 3],
                        'TypeScript': [4, 1],
                        'Node.js': [5, 2],
                        'MongoDB': [3, 1],
                        'React': [1, 4],
                    }
                },
                {
                    id: 'ids',
                    avatar: 'https://horoskop-tarot.sk/images/astro_stars/ariana_grande_zivotopis-znamenie_zverokruhu-laska-zivot-fakty.jpg',
                    username: 'Ariana Grandeeeeeeeeeeeeeeeeeeeee',
                    location: 'USAeeeeeeeeeeeeeeeeeeeeee?',
                    skills: {
                        'JavaScript': [2, 1],
                        'TypeScript': [4, 4],
                        'Node.js': [5, 3],
                        'MongoDB': [1, 1],
                        'React': [1, 4],
                    }
                }
            ]
        }
    }

    render() {
        return <>
            <SpiderChartView data={{
                'JavaScript': [1, 3],
                'TypeScript': [4, 1],
                'Node.js': [5, 2],
                'MongoDB': [3, 1],
                'React': [1, 4],
            }}/>

            <Swipe data={this.state.data} onDecline={declined => this.setState({data: this.state.data.filter(e => e != declined)})}/>
        </>
    }
}