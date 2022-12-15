# Via https://app.sendgrid.com/guide/integrate/langs/ruby

# using SendGrid's Ruby Library
# https://github.com/sendgrid/sendgrid-ruby
require 'sendgrid-ruby'
require 'figaro'
include SendGrid

from = Email.new(email: 'ben@freecouches.org')
to = Email.new(email: 'benjamin@freecouches.org')
subject = 'Sending with SendGrid is Fun'
content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
mail = Mail.new(from, subject, to, content)
sg = SendGrid::API.new(api_key: ENV['sendgrid_api_key'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.headers