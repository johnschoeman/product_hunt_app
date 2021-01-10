source 'https://rubygems.org'

ruby "2.7.1"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 6.1'
gem 'bootsnap', '~> 1.5'
gem 'pg', '~> 1.2.3'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

gem 'webpacker', '6.0.0.pre2'
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
# gem 'redis', '~> 3.0'
gem 'bcrypt', '~> 3.1.7'

gem 'jquery-rails'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'cloudinary'
gem 'figaro'
gem 'faker'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'

  gem 'better_errors'
  gem 'binding_of_caller'

  gem 'pry-rails'
  gem 'annotate'

end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  gem 'guard-livereload', '~> 2.5', require: false
  gem 'rack-livereload'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
