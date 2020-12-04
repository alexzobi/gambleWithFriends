export type Invitation = {
  id: string;
  groupId: string;
  inviter: string;
  invitee: string;
  message: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
}

type InvitationState = {
  invitations: Invitation[],
}

const initialState: InvitationState = {
  invitations: [],
}

export default initialState;

export type {
  InvitationState,
}
