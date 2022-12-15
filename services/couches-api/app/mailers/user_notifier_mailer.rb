class UserNotifierMailer < ApplicationMailer
    default :from => 'hello@freecouches.org'

    # send a signup email to the user, pass in the user object that   contains the user's email address
    def send_signup_email(to_email)
      @name = "Bubaloo"  
      mail( :to => to_email,
      :subject => 'Thanks for signing up for our amazing app' )
    end
end
