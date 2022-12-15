class ApplicationController < ActionController::API
    def index
        render json: {"status": "ok", "message": "You're on the FreeCouches API - running Rails version 7.0.3"}
    end

    # TODO: remove this
    def test_email
        UserNotifierMailer.send_signup_email('benjamin@freecouches.org').deliver
    end

end
