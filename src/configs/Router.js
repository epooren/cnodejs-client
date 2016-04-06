const React = require('react-native');
const {
  Navigator
} = React;
const {SceneConfigs} = Navigator;
// default SceneConfigs.FloatFromRight;
const Index = require('../views/Index');
const Login = require('../views/Login');
const Me = require('../views/Me');
const Message = require('../views/Message');
const Messages = require('../views/Messages');
const MessagesReaded = require('../views/MessagesReaded');
const MessagesUnread = require('../views/MessagesUnread');
const Topic = require('../views/Topic');
const Topics = require('../views/Topics');
const TopicsPost = require('../views/TopicsPost');
const TopicsReply = require('../views/TopicsReply');
const User = require('../views/User');


class Route {
  constructor({
        Component,
        props = {},
        title = '',
        scene = SceneConfigs.FloatFromRight,
        navBar = {}
      } = options) {

    this.Component = Component;
    this.props = props;
    this.title = title;
    this.scene = scene;
    this.navBar = navBar;
  }
}

class Router {
  constructor(navigator) {
    if (!(navigator instanceof Navigator)) {
      throw new TypeError('navigator不是Navigator实例');
    }

    this.navigator = navigator;
  }

  back() {
    this.navigator.pop();
  }

  // methods
  toIndex(props) {
    const route = new Route({
      Component: Index,
      title: 'CnodejsClient',
      props: props
    });

    this.navigator.push(route);
  }

  toLogin(props) {
    const route = new Route({
      Component: Login,
      title: 'Login',
      props: props
    });

    this.navigator.push(route);
  }

  toMe(props) {
    const route = new Route({
      Component: Me,
      title: 'Me',
      props: props
    });

    this.navigator.push(route);
  }

  toMessage(props) {
    const route = new Route({
      Component: Message,
      title: 'Message',
      props: props
    });

    this.navigator.push(route);
  }

  toMessages(props) {
    const route = new Route({
      Component: Messages,
      title: 'Messages',
      props: props
    });

    this.navigator.push(route);
  }

  toMessagesReaded(props) {
    const route = new Route({
      Component: MessagesReaded,
      title: 'MessagesReaded',
      props: props
    });

    this.navigator.push(route);
  }

  toMessagesUnread(props) {
    const route = new Route({
      Component: MessagesUnread,
      title: 'MessagesUnread',
      props: props
    });

    this.navigator.push(route);
  }

  toTopic(props, title) {
    const route = new Route({
      Component: Topic,
      title: title,
      props: props
    });

    this.navigator.push(route);
  }

  toTopics(props) {
    const route = new Route({
      Component: Topics,
      title: 'Topics',
      props: props
    });

    this.navigator.push(route);
  }

  toTopicsPost(props, title) {
    const route = new Route({
      Component: TopicsPost,
      title: title,
      props: props
    });

    this.navigator.push(route);
  }

  toTopicsReply(props, title) {
    const route = new Route({
      Component: TopicsReply,
      title: title,
      props: props
    });

    this.navigator.push(route);
  }

  toUser(props, title) {
    const route = new Route({
      Component: User,
      title: title,
      props: props
    });

    this.navigator.push(route);
  }
}


Router.Route = Route;


module.exports = Router;
