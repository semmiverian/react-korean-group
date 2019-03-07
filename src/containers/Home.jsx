import React, {Component} from 'react'
import axios from 'axios'
import ApinkLogo from './../assets/apink.png'
import IzoneLogo from './../assets/izone.png'
import LoonaLogo from './../assets/loona.jpg'
import TwiceLogo from './../assets/twice.png'
import Group from './../components/Group.jsx'
import Member from './../components/Member.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchMember} from '../store/actions/member'

class Home extends Component {
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
          <Group logo={ApinkLogo} onClick={() => this.props.fetchMember('apink')} />
          <Group logo={LoonaLogo} onClick={() => this.props.fetchMember('loona')} />
          <Group logo={IzoneLogo} />
          <Group logo={TwiceLogo} />
        </div>

        {this.props.groupName && (
          <>
            <span className="font-semibold text-lg"> Members of {this.props.groupName}</span>
            <div className="w-full flex flex-wrap my-4">
              {this.props.members.map((member, index) => (
                <Member member={member} index={index} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  groupName: state.member.groupName,
  members: state.member.members
})

// const mapDispatchToProps = dispatch => ({
//   fetchMember: group => dispatch(fetchMember(group))
// })

const mapDispatchToProps = dispatch => bindActionCreators({fetchMember}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)