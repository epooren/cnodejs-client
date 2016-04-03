const {Component} = require('react');
const {Route} = require('../../components/Navigation');
const Message = require('../Message');

class MessagesBase extends Component {
  constructor(props) {
    super(props);

    this.routeUnread = new Route(Message, '未读消息');
    this.routeReaded = new Route(Message, '已读消息');
  }

  navToUnread() {
    // TODO
  }

  navToReaded() {
    // TODO
  }
}

module.exports = MessagesBase;
