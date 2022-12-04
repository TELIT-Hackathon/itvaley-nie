import * as React from 'react'
import { Box } from '@mui/system'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material'
import { Swipe } from './components/Swipe'
import { SkillsInput } from './components/SkillsInput'

const cats = [
    {
        "name": "Javascript",
        "rel": [
            { "id": "Typescript", "value": 0.6 },
            { "id": "HTML-CSS", "value": 1},
            { "id": "React", "value": 0.8},
            { "id": "OOP", "value": 0.8}
        ]
    },
    {
        "name": "Typescript",
        "rel":[
            {"id": "Javascript","value": 1},
            { "id": "HTML-CSS", "value": 0.8},
            { "id": "React", "value": 0.6},
            { "id": "OOP", "value": 0.8}
        ]
    },
    {
        "name": "HTML-CSS",
        "rel":[
            { "id": "Javascript", "value": 0.2},
            { "id": "React", "value": 0.2},
            { "id": "PHP", "value": 0.2}
        ]
    },
    {
        "name": "Angular",
        "rel":[
            { "id": "React", "value": 0.8},
            { "id": "Javascript", "value": 1},
            { "id": "Typescript", "value": 0.4},
            { "id": "HTML-CSS", "value": 0.8},
            { "id": "OOP", "value": 0.8}
        ]
    },
    {
        "name": "Node-JS",
        "rel":[
            { "id": "Javascript", "value": 1},
            { "id": "HTML-CSS", "value": 1},
            { "id": "Typescript", "value": 0.6},
            { "id": "Angular", "value": 0.6},
            { "id": "React", "value": 0.6},
            { "id": "OOP", "value": 0.8}
        ]
    },
    {
        "name": "React",
        "rel":[
            { "id": "Javascript", "value": 1},
            { "id": "HTML-CSS", "value": 0.8},
            { "id": "Typescript", "value": 0.4},
            { "id": "Angular", "value": 0.8},
            { "id": "OOP", "value": 0.8}
        ]
    },
    {
        "name": "PHP",
        "rel":[
            { "id": "HTML-CSS", "value": 0.6},
            { "id": "Javascript", "value": 0.2},
            { "id": "CakePHP", "value": 0.8},
            { "id": "Larawell", "value": 0.8},
            { "id": "Symfony", "value": 0.8},
            { "id": "Phalcon", "value": 0.8}
        ]
    },
    {
        "name": "CakePHP",
        "rel":[
            { "id": "PHP", "value": 1},
            { "id": "Larawell", "value": 0.8},
            { "id": "Symfony", "value": 0.8},
            { "id": "Phalcon", "value": 0.8}
        ]
    },
    {
        "name": "Larawell",
        "rel":[
            { "id": "PHP", "value": 1},
            { "id": "CakePHP", "value": 0.8},
            { "id": "Symfony", "value": 0.8},
            { "id": "Phalcon", "value": 0.8}
        ]
    },
    {
        "name": "Symfony",
        "rel":[
            { "id": "PHP", "value": 1},
            { "id": "Larawell", "value": 0.8},
            { "id": "CakePHP", "value": 0.8},
            { "id": "Phalcon", "value": 0.8}
        ]
    },
    {
        "name": "Phalcon",
        "rel":[
            { "id": "PHP", "value": 1},
            { "id": "Larawell", "value": 0.8},
            { "id": "Symfony", "value": 0.8},
            { "id": "CakePHP", "value": 0.8}
        ]
    },
    {
        "name": "Python",
        "rel":[
            { "id": "ML", "value": 0.6},
            { "id": "OOP", "value": 0.2},
            { "id": "Django", "value": 0.8},
            { "id": "Flask", "value": 0.8}
        ]
    },
    {
        "name": "Django",
        "rel":[
            { "id": "Python", "value": 1},
            { "id": "Flask", "value": 0.8}
        ]
    }
    ,
    {
        "name": "Flask",
        "rel":[
            { "id": "Python", "value": 1},
            { "id": "Django", "value": 0.8}
        ]
    },
    {
        "name": "Cpp",
        "rel":[
            { "id": "Rust", "value": 0.6},
            { "id": "C", "value": 1},
            { "id": ".NET", "value": 0.6},
            { "id": "Java", "value": 0.6},
            { "id": "OOP", "value": 1},
            { "id": "MFC", "value": 0.8},
            { "id": "Qt", "value": 0.8},
            { "id": "KDE", "value": 0.8},
            { "id": "GNOME", "value": 0.8}
        ]
    },
    {
        "name": "MFC",
        "rel":[
            { "id": "Cpp", "value": 1},
            { "id": "GNOME", "value": 0.8},
            { "id": "QT", "value": 0.8},
            { "id": "KDE", "value": 0.8}
        ]
    }
    ,
    {
        "name": "Qt",
        "rel":[
            { "id": "Cpp", "value": 1},
            { "id": "GNOME", "value": 0.8},
            { "id": "MFC", "value": 0.8},
            { "id": "KDE", "value": 0.8}
        ]
    }
    ,
    {
        "name": "KDE",
        "rel":[
            { "id": "Cpp", "value": 1},
            { "id": "GNOME", "value": 0.8},
            { "id": "QT", "value": 0.8},
            { "id": "MFC", "value": 0.8}
        ]
    }
    ,
    {
        "name": "GNOME",
        "rel":[
            { "id": "Cpp", "value": 1},
            { "id": "MFC", "value": 0.8},
            { "id": "QT", "value": 0.8},
            { "id": "KDE", "value": 0.8}
        ]
    },
    {
        "name": ".NET",
        "rel":[
            { "id": "Java", "value": 0.8},
            { "id": "Cpp", "value": 0.4},
            { "id": "OOP", "value": 1},
            {"id":"C#", "value": 1}
        ]
    },
    {
        "name": "Java",
        "rel":[
            { "id": ".NET", "value": 0.6},
            { "id": "Cpp", "value": 0.4},
            { "id": "OOP", "value": 1},
            { "id": "Spring", "value": 1},
            { "id": "Hibernate", "value": 1},
            { "id": "Strut", "value": 1}
        ]
    },
    {
        "name": "Spring",
        "rel":[
            { "id": "Java", "value": 1},
            { "id": "Strut", "value": 0.8},
            { "id": "Hibernate", "value": 0.8}
        ]
    },
    {
        "name": "Hibernate",
        "rel":[
            { "id": "Java", "value": 1},
            { "id": "Strut", "value": 0.8},
            { "id": "Spring", "value": 0.8}
        ]
    },
    {
        "name": "Strut",
        "rel":[
            { "id": "Java", "value": 1},
            { "id": "Hibernate", "value": 0.8},
            { "id": "Spring", "value": 0.8}
        ]
    },
    {
        "name": "Go",
        "rel":[
            { "id": "Rust", "value": 0.6},
            { "id": "C", "value": 0.2},
            { "id": "Cpp", "value": 0.4},
            { "id": "Revel", "value": 0.8},
            { "id": "Beego", "value": 0.8}
        ]
    },
    {
        "name": "Revel",
        "rel":[
            { "id": "Go", "value": 1},
            { "id": "Beego", "value": 0.8}
        ]
    },
    {
        "name": "Beego",
        "rel":[
            { "id": "Go", "value": 1},
            { "id": "Revel", "value": 0.8}
        ]
    },
    {
        "name": "Rust",
        "rel":[
            { "id": "Cpp", "value": 0.6},
            { "id": "C", "value": 0.6},
            { "id": "Go", "value": 0.2},
            { "id": "Javascript", "value": 0.2}
        ]
    },
    {
        "name": "C",
        "rel":[
            { "id": "Cpp", "value": 0.6},
            { "id": "Rust", "value": 0.4},
            { "id": "Go", "value": 0.2}
        ]
    },
    {
        "name": "OOP",
        "rel":[
            { "id": ".NET", "value": 0.8},
            { "id": "Java", "value": 0.8},
            { "id": "Javascript", "value": 0.8},
            { "id": "Python", "value": 0.4},
            { "id": "Cpp", "value": 0.6},
            { "id": "Typescript", "value": 0.6},
            { "id": "React", "value": 0.8},
            { "id": "Kotlin", "value": 0.8},
            { "id": "Swift", "value": 0.8},
            { "id": "Perl", "value": 0.4},
            { "id": "R", "value": 0.6},
            { "id": "Ruby", "value": 0.8},
            { "id": "Matlab", "value": 0.2}
        ]
    },
    {
        "name": "ML",
        "rel":[
            { "id": "Python", "value": 1},
            { "id": "Javascript", "value": 0.4},
            { "id": "Rust", "value": 0.4}
        ]
    },
    {
        "name": "SQL",
        "rel":[
            { "id": "NoSQL", "value": 0.6}
        ]
    },
    {
        "name": "NoSQL",
        "rel":[
            { "id": "SQL", "value": 0.4}
        ]
    },
    {
        "name": "Kotlin",
        "rel":[
            { "id": "Java", "value": 0.6},
            { "id": "Python", "value": 0.6},
            { "id": "Cpp", "value": 0.2},
            { "id": "Java", "value": 0.4},
            { "id": "C#", "value": 0.2},
            { "id": "OOP", "value": 1}
        ]
    },
    {
        "name": "Swift",
        "rel":[
            { "id": "C", "value": 0.6},
            { "id": "Java", "value": 0.4},
            { "id": "Cpp", "value": 0.4},
            { "id": "Python", "value": 0.8},
            { "id": "Ruby", "value": 0.6},
            { "id": "Kotlin", "value": 0.6},
            { "id": "OOP", "value": 1},
            { "id": "Alamofire", "value": 0.8},
            { "id": "RxSwift", "value": 0.8},
            { "id": "Snapkit", "value": 0.8}
        ]
    },
    {
        "name": "Alamofire",
        "rel":[
            { "id": "Swift", "value": 1},
            { "id": "RxSwift", "value": 0.8},
            { "id": "Snapkit", "value": 0.8}
        ]
    },
    {
        "name": "RxSwift",
        "rel":[
            { "id": "Swift", "value": 1},
            { "id": "Alamofire", "value": 0.8},
            { "id": "Snapkit", "value": 0.8}
        ]
    },
    {
        "name": "Snapkit",
        "rel":[
            { "id": "Swift", "value": 1},
            { "id": "RxSwift", "value": 0.8},
            { "id": "Alamofire", "value": 0.8}
        ]
    },
    {
        "name": "R",
        "rel":[
            { "id": "Python", "value": 0.8},
            { "id": "Cpp", "value": 0.6},
            { "id": "C#", "value": 0.2},
            { "id": "Java", "value": 0.4},
            { "id": "OOP", "value": 1},
            { "id": "ML", "value": 1}
        ]
    },
    {
        "name": "Ruby",
        "rel":[
            { "id": "Java", "value": 0.8},
            { "id": "Cpp", "value": 0.8},
            { "id": "Python", "value": 0.6},
            { "id": "PHP", "value": 0.4},
            { "id": "Javascript", "value": 0.4},
            { "id": "OOP", "value": 1}
        ]
    },
    {
        "name": "Matlab",
        "rel":[
            { "id": "C", "value": 0.8},
            { "id": "Python", "value": 0.8},
            { "id": "OOP", "value": 0.4}
        ]
    },
    {
        "name": "Scala",
        "rel":[
            { "id": "OOP", "value": 1},
            { "id": "Kotlin", "value": 0.8},
            { "id": "Python", "value": 0.6},
            { "id": "Java", "value": 0.8},
            { "id": "Go", "value": 0.6},
            { "id": "Cpp", "value": 0.4}
        ]
    },
    {
        "name": "Perl",
        "rel":[
            { "id": "C", "value": 0.8},
            { "id": "Cpp", "value": 1},
            { "id": "Python", "value": 0.6},
            { "id": "OOP", "value": 0.6}
        ]
    },
    {
        "name": "Bash",
        "rel":[
            { "id": "Shell", "value": 0.8},
            { "id": "Python", "value": 0.2}
        ]
    },
    {
        "name": "Shell",
        "rel":[
            { "id": "Bash", "value": 0.8},
            { "id": "Python", "value": 0.2}
        ]
    }
]

export class Demo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            WhatIWant: {
                role: 'student',
                skills: [
                    { id: 'Javascript', level: 4 },
                    { id: 'Typescript', level: 3 },
                    { id: 'HTML-CSS', level: 2 },
                    { id: 'Larawell', level: 1 },
                    { id: 'Cpp', level: 1 },
                ]
            },
            matches: []
        }
    }

    render() {
        const { WhatIWant, matches } = this.state

        const blockStyle = {
            display: 'flex', flexDirection: 'column', width: '50%', maxWidth: '50%', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 3
        }

        return (
            <Box fullSize sx={{display: 'flex', flexDirection: 'row', height: '100%'}}>
                <Box fullSize sx={blockStyle}>
                    <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select
                            value={WhatIWant.role}
                            label="User role"
                            onChange={e => {
                                this.setState({...this.state, WhatIWant: {...WhatIWant, role: e.target.value}})
                            }}
                        >
                            <MenuItem value={'student'}>Student</MenuItem>
                            <MenuItem value={'teacher'}>Teacher</MenuItem>
                            <MenuItem value={'expert'}>Expert</MenuItem>
                        </Select>
                    </FormControl>


                    <SkillsInput
                        value={WhatIWant.skills}
                        onChange={value => this.setState({...this.state, WhatIWant: {...WhatIWant, skills: value}})}
                        options={cats.reduce((pre, cur) => ({...pre, [cur.name]: cur.name}), {})}
                    />
                </Box>
                <Box fullSize sx={blockStyle}>
                    <Swipe data={matches} search={WhatIWant}/>
                </Box>
            </Box>
        )
    }
}
