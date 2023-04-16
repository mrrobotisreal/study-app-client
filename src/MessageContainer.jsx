import Container from '@cloudscape-design/components/container';
import './Chat.css';

export default class MessageContainer extends Container {
  render() {
    return (
      <div className={this.props.sentOrReceived === 'received' ? 'received' : 'sent'}>
        {this.props.messageContent}
        {this.props.date}
        {this.props.time}
      </div>
    )
  }
}