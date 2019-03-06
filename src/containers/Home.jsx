import React, {Component} from 'react'
import axios from 'axios'
import ApinkLogo from './../assets/apink.png'
import IzoneLogo from './../assets/izone.png'
import LoonaLogo from './../assets/loona.jpg'
import TwiceLogo from './../assets/twice.png'
import Group from './../components/Group.jsx'
import Member from './../components/Member.jsx'

export default class Home extends Component {
  state = {
    members: [],
    groupName: ''
  }

  fetchMember = async member => {
    try {
      const {data} = await axios.get(`http://localhost:3001/${member}`)
      this.setState({
        members: data,
        groupName: member
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="w-4/5 mx-auto">
        <span className="font-semibold text-lg"> Choose Your favorite Group</span>

        <div className="w-full flex justify-between my-4">
          <Group logo={ApinkLogo} onClick={() => this.fetchMember('apink')} />
          <Group logo={LoonaLogo} onClick={() => this.fetchMember('loona')} />
          <Group logo={IzoneLogo} />
          <Group logo={TwiceLogo} />
        </div>

        {this.state.groupName && (
          <>
            <span className="font-semibold text-lg"> Members of Apink</span>
            <div className="w-full flex flex-wrap my-4">
              {this.state.members.map((member, index) => (
                <Member member={member} index={index} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}
