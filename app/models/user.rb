# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  headline        :string
#  email           :string
#  image_url       :string
#  website_url     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#  session_token   :string           not null
#  userslug        :string
#

class User < ApplicationRecord
    validates :password_digest, presence: true
    validates :username, uniqueness: true, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token, :ensure_user_slug

    has_many :comments

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        return user if user.is_password?(password)
    end

    def ensure_user_slug
        self.userslug ||= "@#{self.username}"
    end

    def update_slug!
        self.userslug = "@#{self.username}"
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def generate_session_token
        SecureRandom.urlsafe_base64(16)
    end
end
