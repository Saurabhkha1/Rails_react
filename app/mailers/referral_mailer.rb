class ReferralMailer < ApplicationMailer
  def referral_email(email)
    @email = email
    @signup_url = "http://localhost:3000/signup"

    mail(to: email, subject: 'Invitation to Sign Up')
  end
end