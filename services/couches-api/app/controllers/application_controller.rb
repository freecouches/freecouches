class ApplicationController < ActionController::API
    def index
        render json: {"status": "ok", "message": "You're on the FreeCouches API - running Rails version 7.0.3"}
    end

end
