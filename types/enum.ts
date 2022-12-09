export enum ModalTypes {
  CREATE_DREAM = "CREATE_DREAM",
  LOGIN = "LOGIN",
  SIGNUP = "SIGN_UP",
  SEND_EMAIL_TO_USER = "SEND_EMAIL_TO_USER",
  SEND_EMAIL_TO_ME = "SEND_EMAIL_TO_AUTHOR",
}

export enum QueryNames {
  NEW_DREAM = "newDream",
  SIGN_UP = "signUp",
  SIGN_IN = "signIn",
  EMAIL_TO_USER = "sendEmail",
  EMAIL_TO_ME = "sendEmailMe",
  ADD_COMMENT_TO_DREAM = "addCommentToDream",
  ADD_COMMENT_TO_COMMENT = "addCommentToComment",
}

export enum ButtonTypes {
  FORM_BUTTON = "FORM_BUTTON",
  MODAL_BUTTON = "MODAL_BUTTON",
  LEAVE_COMMENT = "LEAVE_COMMENT",
  CTA_DREAM_BUTTON = "CTA_DREAM_BUTTON",
  CTA_USER_BUTTON = "CTA_USER_BUTTON",
}
