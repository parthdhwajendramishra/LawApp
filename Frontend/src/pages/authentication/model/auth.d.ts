export type ResetPasswordRequestDto = {
  token: String
  password: String
  confirmPassword: String
}
export type ForgetPasswordRequestDto = {
  email: String
  username: String
}
export type ChangePasswordRequestDto = {
  oldPassword: String
  newPassword: String
  confirmNewPassword: String
}
export type UserProfileDetailsDto = {
  id: Number
  email: String
  username: String
  firstName: String
  lastname: String
  phoneNumber: String
  country: String
  state: String
  city: String
  address: String
  pinCode: String
  status: String
  profileUrl: String
}
export type SignInRequestDto = {
  username: String
  password: String
}
export type SignInResponseDto = {
  token: String
  userDetails: UserProfileDetailsDto
}
export type SignUpRequestDto = {
  email: String
  username: String
  password: String
  confirmPassword: String
  phoneNumber: String
  country?: String
}
export type SignUpResponseDto = {
  id: Number
  email: String
  username: String
  firstName: String
  lastName: String
  phoneNumber: String
  country: String
  state: String
  city: String
  address: String
  pinCode: String
  status: String
}
export type VerifyOtpRequestDto = {
  email: String
  username: String
  otp: Number
}
export type VerifyOtpResponseDto = {
  token: String
}
// 
export type Authentication = {
  username: String
  token: String
}
export type SigninGoogle = {
  token: String
  userDetails: userDetails
}
export type SigninGithub = {
  token: String
  userDetails: userDetails
}
export type SigninFacebook = {
  token: String
  userDetails: userDetails
}
//root state--------------------------------------
export type AuthState = {
  authSlice: {
    signin: SignInResponseDto
    signup: SignUpResponseDto
    resendVerifyOtp: Authentication
    resendOtp: Authentication
    forgetPassword: UserProfileDetailsDto
    changePassword: UserProfileDetailsDto
    resetPassword: UserProfileDetailsDto
    verifyOtp: VerifyOtpResponseDto
    signinGoogle: SigninGoogle
    signinGithub: SigninGithub
    signinFacebook: SigninFacebook
  }
}
