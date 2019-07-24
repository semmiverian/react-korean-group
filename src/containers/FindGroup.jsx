import React, {Component} from 'react'
import Member from './../components/Member.jsx'
import {fetchMember} from './../api/axios'

export default class FindGroup extends Component {
  state = {
    group: '',
    groupName: ''.groupName,
    members: [],
    error: []
  }

  onChange = e => {
    this.setState({
      group: e.target.value
    })
  }

  fetchMember = async member => {
    try {
      const {data} = await fetchMember(member)
      this.setState({
        members: data,
        groupName: member,
        group: ''
      })
    } catch (err) {
      this.setState({
        error: 'not found'
      })
    }
  }

  findGroup = e => {
    e.preventDefault()
    this.fetchMember(this.state.group)
  }

  render() {
    return (
      <div className="w-4/5 mx-auto" data-testid="findGroupPage">
        <form onSubmit={this.findGroup} action="" className="my-5">
          <div className="flex w-full mb-6">
            <div className="w-4/5 relative">
              <input
                type="text"
                data-testid="formInput"
                placeholder="Search Any Group"
                onChange={this.onChange}
                value={this.state.group}
                className="appearance-none bg-white text-grey-darker border border-grey-lighter rounded-l py-3 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-grey w-full"
              />
              <div className="pointer-events-none absolute pin-y pin-l pb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 mt-2 mr-2 ml-2 icon-search">
                  <circle cx="10" cy="10" r="7" className="fill-transparent" />
                  <path
                    d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    className="fill-blue"
                  />
                </svg>
              </div>
            </div>
            <button type="submit" data-testid="formSubmit" className="bg-blue text-white font-semibold rounded-r h-11 w-1/5 ml-auto">
              <span>Find Group</span>
            </button>
          </div>
          {this.state.error && <span className="text-red font-normal text-sm">{this.state.error}</span>}
        </form>

        {this.state.groupName && (
          <>
            <span className="font-semibold text-lg"> Members of {this.state.groupName}</span>
            <div className="w-full flex flex-wrap my-4" data-testid="memberList">
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
