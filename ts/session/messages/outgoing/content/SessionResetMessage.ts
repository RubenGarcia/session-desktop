import { ContentMessage } from './ContentMessage';
import { SignalService } from '../../../../protobuf';

export class SessionResetMessage extends ContentMessage {

  protected contentProto(): SignalService.Content {
    throw new Error('Not implemented');
  }
}
