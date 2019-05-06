import React, {Component} from 'react'
import axios from 'axios'
import ApinkLogo from './../assets/apink.png'
import BtsLogo from './../assets/bts.png'
import LoonaLogo from './../assets/loona.jpg'
import WannaOneLogo from './../assets/wanna-one.png'
import Group from './../components/Group.jsx'
import Member from './../components/Member.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchMember} from '../store/actions/member'
import ApplicationContext from '../context'

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
      <ApplicationContext.Consumer>
        {theme => (
          <div className="w-4/5 mx-auto">
            <span className={`font-semibold text-lg ${theme.text}`}> Choose Your favorite Group</span>

            <div className="w-full flex justify-between my-4">
              <Group logo={ApinkLogo} onClick={() => this.props.fetchMember('apink')} id="apink" />
              <Group logo={LoonaLogo} onClick={() => this.props.fetchMember('loona')} id="loona" />
              <Group logo={BtsLogo} onClick={() => this.props.fetchMember('bts')} id="bts" />
              <Group logo={WannaOneLogo} onClick={() => this.props.fetchMember('wannaone')} id="wannaone" />
            </div>

            {this.props.groupName && (
              <>
                <span className="font-semibold text-lg" data-testid="memberWrapper"> Members of {this.props.groupName}</span>
                <div className="w-full flex flex-wrap my-4" data-testid="memberList">
                  {this.props.members.map((member, index) => (
                    <Member member={member} index={index} key={index} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </ApplicationContext.Consumer>
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
