# app/controllers/referrals_controller.rb

class ReferralsController < ApplicationController
  def create
    email = params[:email]

    ReferralMailer.referral_email(email).deliver_now

    render json: { message: 'Referral email sent successfully' }
  end
end
